import { client } from '@/sanity/lib/client'
import {
  PROJECTS_QUERY,
  PROJECT_BY_LEGACY_ID_QUERY,
  RELATED_PROJECTS_QUERY,
  ALL_LEGACY_IDS_QUERY,
} from '@/sanity/lib/queries'
import {
  PortfolioProject,
  portfolioProjects as localProjects,
  getProjectById as getLocalProjectById,
  FeatureSection,
  Challenge,
} from '@/data/portfolio'

export interface SanityAssetRef {
  _id?: string
  url?: string
}

export interface SanityImageField {
  asset?: SanityAssetRef
  alt?: string
}

export interface SanityProjectDocument {
  _id: string
  name: string
  legacyId: number
  slug?: string
  category: 'Frontend Development' | 'Backend Development' | 'Full Stack Development'
  displayOrder?: number
  isPublished?: boolean
  coverImage?: SanityImageField | string
  images?: Array<SanityImageField | string>
  description: string
  longDescription: string
  technologies: string[]
  features: Array<string | { title: string; items: Array<{ name: string; description?: string }> }>
  challenges: Array<string | { title: string; description: string }>
  solution: string
  liveUrl?: string
  githubUrl?: string[]
  date: string
  client?: string
  role: string
}

/**
 * Normalizes raw Sanity project documents into the application's PortfolioProject format.
 */
export function normalizeSanityProject(doc: SanityProjectDocument): PortfolioProject {
  // Resolve cover image url
  let coverImage = ''
  if (typeof doc.coverImage === 'string') {
    coverImage = doc.coverImage
  } else if (doc.coverImage?.asset?.url) {
    coverImage = doc.coverImage.asset.url
  }

  // Resolve gallery images
  const images: string[] = (doc.images || [])
    .map((img) => {
      if (typeof img === 'string') return img
      return img?.asset?.url || ''
    })
    .filter(Boolean)

  // Normalize features
  const features: string[] | FeatureSection[] = Array.isArray(doc.features)
    ? (doc.features.map((f: any) => {
        if (typeof f === 'string') return f
        if (f && typeof f === 'object') {
          if ('text' in f) return f.text
          if ('title' in f) {
            return {
              title: f.title,
              items: (f.items || []).map((it: any) => ({
                name: it.name || '',
                description: it.description || '',
              })),
            } as FeatureSection
          }
        }
        return String(f)
      }) as any)
    : []

  // Normalize challenges
  const challenges: string[] | Challenge[] = Array.isArray(doc.challenges)
    ? (doc.challenges.map((c: any) => {
        if (typeof c === 'string') return c
        if (c && typeof c === 'object') {
          if ('text' in c) return c.text
          if ('title' in c) {
            return {
              title: c.title,
              description: c.description || '',
            } as Challenge
          }
        }
        return String(c)
      }) as any)
    : []

  return {
    id: doc.legacyId,
    name: doc.name || 'Untitled Project',
    category: doc.category || 'Frontend Development',
    coverImage: coverImage || '/img/profile.png',
    images: images.length > 0 ? images : [coverImage].filter(Boolean),
    description: doc.description || '',
    longDescription: doc.longDescription || doc.description || '',
    technologies: Array.isArray(doc.technologies) ? doc.technologies : [],
    features,
    challenges,
    solution: doc.solution || '',
    liveUrl: doc.liveUrl,
    githubUrl: doc.githubUrl,
    date: doc.date || new Date().toISOString().split('T')[0],
    client: doc.client,
    role: doc.role || 'Developer',
  }
}

const shouldFallbackToLocal = () => {
  return process.env.DISABLE_SANITY_FALLBACK !== 'true'
}

/**
 * Fetch all published projects from Sanity with local fallback.
 */
export async function getPublishedProjects(): Promise<PortfolioProject[]> {
  try {
    const rawDocs = await client.fetch<SanityProjectDocument[]>(
      PROJECTS_QUERY,
      {},
      {
        next: {
          revalidate: 60,
          tags: ['projects'],
        },
      }
    )

    if (rawDocs && rawDocs.length > 0) {
      return rawDocs.map(normalizeSanityProject)
    }

    if (shouldFallbackToLocal()) {
      return localProjects
    }
    return []
  } catch (error) {
    console.warn('[Sanity Data Service] Failed to fetch published projects from Sanity:', error)
    if (shouldFallbackToLocal()) {
      console.info('[Sanity Data Service] Falling back to local static project definitions.')
      return localProjects
    }
    throw error
  }
}

/**
 * Fetch a single project by numeric legacy ID.
 */
export async function getProjectById(id: number): Promise<PortfolioProject | undefined> {
  if (isNaN(id)) return undefined

  try {
    const rawDoc = await client.fetch<SanityProjectDocument | null>(
      PROJECT_BY_LEGACY_ID_QUERY,
      { legacyId: id },
      {
        next: {
          revalidate: 60,
          tags: [`project-${id}`, 'projects'],
        },
      }
    )

    if (rawDoc) {
      return normalizeSanityProject(rawDoc)
    }

    if (shouldFallbackToLocal()) {
      return getLocalProjectById(id)
    }
    return undefined
  } catch (error) {
    console.warn(`[Sanity Data Service] Failed to fetch project ${id} from Sanity:`, error)
    if (shouldFallbackToLocal()) {
      console.info(`[Sanity Data Service] Falling back to local project ${id}.`)
      return getLocalProjectById(id)
    }
    throw error
  }
}

/**
 * Fetch related projects matching category.
 */
export async function getRelatedProjects(
  currentProject: PortfolioProject,
  allProjects?: PortfolioProject[]
): Promise<PortfolioProject[]> {
  if (allProjects && allProjects.length > 0) {
    return allProjects
      .filter((p) => p.id !== currentProject.id && p.category === currentProject.category)
      .slice(0, 3)
  }

  try {
    const rawDocs = await client.fetch<SanityProjectDocument[]>(
      RELATED_PROJECTS_QUERY,
      { category: currentProject.category, legacyId: currentProject.id },
      {
        next: {
          revalidate: 60,
          tags: ['projects'],
        },
      }
    )

    if (rawDocs && rawDocs.length > 0) {
      return rawDocs.map(normalizeSanityProject)
    }

    if (shouldFallbackToLocal()) {
      return localProjects
        .filter((p) => p.id !== currentProject.id && p.category === currentProject.category)
        .slice(0, 3)
    }
    return []
  } catch (error) {
    console.warn('[Sanity Data Service] Failed to fetch related projects from Sanity:', error)
    if (shouldFallbackToLocal()) {
      return localProjects
        .filter((p) => p.id !== currentProject.id && p.category === currentProject.category)
        .slice(0, 3)
    }
    return []
  }
}

/**
 * Get all existing legacy IDs (useful for static generation).
 */
export async function getAllProjectIds(): Promise<number[]> {
  try {
    const ids = await client.fetch<number[]>(
      ALL_LEGACY_IDS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    if (ids && ids.length > 0) {
      return ids
    }
    return localProjects.map((p) => p.id)
  } catch {
    return localProjects.map((p) => p.id)
  }
}
