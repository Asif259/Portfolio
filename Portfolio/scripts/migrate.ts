import fs from 'fs'
import path from 'path'
import { loadEnvConfig } from '@next/env'
import { createClient } from '@sanity/client'
import { portfolioProjects, FeatureSection, Challenge } from '../data/portfolio'

// 1. Resolve workspace paths
// __dirname = /.../Portfolio/scripts
const appDir = path.resolve(__dirname, '..')
const monorepoRoot = path.resolve(__dirname, '../..')

// 2. Load environment variables using Next.js-compatible loading mechanism
// Loads .env.local, .env.development.local, .env, etc.
// Check both monorepo root and app directory to guarantee coverage.
loadEnvConfig(monorepoRoot)
loadEnvConfig(appDir)

// Fallback: Check if .env.local exists directly at monorepo root or app directory
function loadEnvLocalFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8')
    for (const line of content.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const match = trimmed.match(/^([^=]+)=(.*)$/)
      if (match) {
        const key = match[1].trim()
        let val = match[2].trim()
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1)
        }
        if (!process.env[key]) {
          process.env[key] = val
        }
      }
    }
  }
}

loadEnvLocalFile(path.join(monorepoRoot, '.env.local'))
loadEnvLocalFile(path.join(monorepoRoot, '.env'))
loadEnvLocalFile(path.join(appDir, '.env.local'))
loadEnvLocalFile(path.join(appDir, '.env'))

// Parse CLI flags
const isDryRun = process.argv.includes('--dry-run')

// Read environment variables
const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').trim()
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || '').trim()
const apiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || '').trim()
const writeToken = (process.env.SANITY_API_WRITE_TOKEN || '').trim()

/**
 * Validates the Sanity configuration parameters before performing actions.
 * NEVER logs the token value.
 */
function validateSanityConfig(dryRun: boolean): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Validate Project ID
  if (!projectId || !/^[a-z0-9_-]+$/i.test(projectId)) {
    errors.push(`Invalid Project ID: "${projectId || '<empty>'}". Must be a non-empty alphanumeric string.`)
  }

  // Validate Dataset
  if (!dataset || !/^[a-z0-9_-]+$/i.test(dataset)) {
    errors.push(`Invalid Dataset name: "${dataset || '<empty>'}". Must be a valid dataset identifier.`)
  }

  // Validate API Version (YYYY-MM-DD format)
  if (!apiVersion || !/^\d{4}-\d{2}-\d{2}$/.test(apiVersion)) {
    errors.push(`Invalid API Version: "${apiVersion || '<empty>'}". Must be formatted as YYYY-MM-DD (e.g., 2026-02-01).`)
  }

  // Validate Write Token
  if (!writeToken) {
    if (!dryRun) {
      errors.push('Missing SANITY_API_WRITE_TOKEN. An Editor/Admin write token is required to upload assets and create documents.')
    }
  } else if (writeToken.length < 20) {
    errors.push('SANITY_API_WRITE_TOKEN appears malformed (token is unexpectedly short).')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96)
}

function resolveLocalPath(assetUrl: string): string {
  let cleanPath = assetUrl.startsWith('/') ? assetUrl.slice(1) : assetUrl
  // Correct legacy /images/bariara typo if present
  cleanPath = cleanPath.replace(/^images\/bariara\//, 'img/barivara/')
  return path.join(appDir, 'public', cleanPath)
}

async function runMigration() {
  console.log('=====================================================')
  console.log('🚀 Sanity Portfolio Migration Script')
  console.log(`Mode: ${isDryRun ? '🔍 DRY RUN (Validation Only)' : '⚡ LIVE MIGRATION'}`)
  console.log('=====================================================\n')

  // Step 1: Configuration Validation
  console.log('Step 1: Validating Sanity Configuration & Environment...')
  const configCheck = validateSanityConfig(isDryRun)

  console.log(`  • Project ID:  ${projectId || '<not set>'}`)
  console.log(`  • Dataset:     ${dataset || '<not set>'}`)
  console.log(`  • API Version: ${apiVersion || '<not set>'}`)
  console.log(`  • Write Token: ${writeToken ? `[CONFIGURED (${writeToken.length} characters)]` : '[NOT CONFIGURED]'}`)

  if (!configCheck.isValid) {
    console.error('\n❌ Configuration Validation Failed:')
    configCheck.errors.forEach((err) => console.error(`  - ${err}`))
    console.error('\nPlease verify your environment variables in .env.local before proceeding.')
    process.exit(1)
  }
  console.log('  ✓ Sanity configuration parameters are valid!\n')

  // Step 2: Validate local project definitions and physical assets
  console.log('Step 2: Validating local project records and physical assets...')
  let totalIssues = 0
  let totalImagesCount = 0

  for (const project of portfolioProjects) {
    console.log(`Checking Project #${project.id}: "${project.name}"`)
    const coverPath = resolveLocalPath(project.coverImage)
    if (!fs.existsSync(coverPath)) {
      console.error(`  ❌ Cover image missing: ${coverPath} (referenced as ${project.coverImage})`)
      totalIssues++
    } else {
      console.log(`  ✓ Cover image found: ${path.relative(monorepoRoot, coverPath)}`)
      totalImagesCount++
    }

    if (project.images && project.images.length > 0) {
      for (const imgUrl of project.images) {
        const imgPath = resolveLocalPath(imgUrl)
        if (!fs.existsSync(imgPath)) {
          console.error(`  ❌ Gallery image missing: ${imgPath} (referenced as ${imgUrl})`)
          totalIssues++
        } else {
          totalImagesCount++
        }
      }
      console.log(`  ✓ All ${project.images.length} gallery images verified on disk.`)
    }
  }

  if (totalIssues > 0) {
    console.error(`\n❌ Validation failed with ${totalIssues} issue(s). Aborting migration.`)
    process.exit(1)
  }

  console.log(`\n✅ All ${portfolioProjects.length} projects and physical images are verified and ready!`)

  // If running in dry run mode, stop here and summarize
  if (isDryRun) {
    console.log('\n=====================================================')
    console.log('📋 DRY RUN VERIFICATION SUMMARY')
    console.log('=====================================================')
    console.log(`• Projects ready for ingestion: ${portfolioProjects.length}`)
    console.log(`• Total image references verified: ${totalImagesCount}`)
    console.log(`• Target Content Lake: ${projectId} / ${dataset}`)
    console.log(`• API Version: ${apiVersion}`)
    console.log(`• Write Token Status: ${writeToken ? 'Detected and valid' : 'Missing (required for live migration)'}`)
    console.log(`• Document ID mapping: project-1 through project-${portfolioProjects.length}`)
    console.log('\nAll pre-flight checks PASSED!')
    console.log('To execute the live migration, run:')
    console.log('  npm run migrate\n')
    return
  }

  // Step 3: Live Migration Execution (Only reached when NOT dry-run)
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token: writeToken,
    useCdn: false,
  })

  // Asset upload cache to prevent redundant re-uploads across reruns
  const assetMap = new Map<string, string>()

  async function uploadImage(assetUrl: string): Promise<string> {
    const filePath = resolveLocalPath(assetUrl)
    if (assetMap.has(filePath)) {
      return assetMap.get(filePath)!
    }

    const filename = path.basename(filePath)
    console.log(`  Uploading asset: ${filename}...`)
    const fileStream = fs.createReadStream(filePath)
    const asset = await client.assets.upload('image', fileStream, {
      filename,
    })

    assetMap.set(filePath, asset._id)
    return asset._id
  }

  console.log('\nStep 3: Migrating projects and uploading assets to Sanity Content Lake...\n')

  for (const project of portfolioProjects) {
    console.log(`\nProcessing Project #${project.id}: "${project.name}"...`)

    // 1. Upload cover image
    const coverAssetId = await uploadImage(project.coverImage)

    // 2. Upload gallery images
    const galleryImageObjects = []
    if (project.images && project.images.length > 0) {
      for (let i = 0; i < project.images.length; i++) {
        const imgUrl = project.images[i]
        const imgAssetId = await uploadImage(imgUrl)
        galleryImageObjects.push({
          _key: `gallery-img-${i + 1}`,
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imgAssetId,
          },
          alt: `${project.name} screenshot ${i + 1}`,
        })
      }
    }

    // 3. Format features (polymorphic support)
    const formattedFeatures = (project.features || []).map((feat, idx) => {
      if (typeof feat === 'string') {
        return {
          _key: `feat-simple-${idx + 1}`,
          _type: 'simpleFeature',
          text: feat,
        }
      }
      return {
        _key: `feature-section-${idx + 1}`,
        _type: 'featureSection',
        title: (feat as FeatureSection).title,
        items: ((feat as FeatureSection).items || []).map((it, itemIdx) => ({
          _key: `feat-item-${idx + 1}-${itemIdx + 1}`,
          _type: 'featureItem',
          name: it.name,
          description: it.description || '',
        })),
      }
    })

    // 4. Format challenges (polymorphic support)
    const formattedChallenges = (project.challenges || []).map((chal, idx) => {
      if (typeof chal === 'string') {
        return {
          _key: `chal-simple-${idx + 1}`,
          _type: 'simpleChallenge',
          text: chal,
        }
      }
      return {
        _key: `challenge-${idx + 1}`,
        _type: 'challengeItem',
        title: (chal as Challenge).title,
        description: (chal as Challenge).description,
      }
    })

    // 5. Construct Sanity document with deterministic _id
    const documentId = `project-${project.id}`
    const doc = {
      _id: documentId,
      _type: 'project',
      legacyId: project.id,
      name: project.name,
      slug: {
        _type: 'slug',
        current: slugify(project.name),
      },
      category: project.category,
      displayOrder: project.id,
      isPublished: true,
      coverImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: coverAssetId,
        },
        alt: `${project.name} Cover`,
      },
      images: galleryImageObjects,
      description: project.description,
      longDescription: project.longDescription,
      technologies: project.technologies,
      features: formattedFeatures,
      challenges: formattedChallenges,
      solution: project.solution,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      date: project.date,
      client: project.client,
      role: project.role,
    }

    console.log(`  Writing document: ${documentId}...`)
    await client.createOrReplace(doc)
    console.log(`  ✓ Successfully saved Project #${project.id}`)
  }

  console.log('\n=====================================================')
  console.log('🎉 Migration Completed Successfully!')
  console.log(`All ${portfolioProjects.length} portfolio projects migrated to Sanity [${dataset}].`)
  console.log('=====================================================\n')
}

runMigration().catch((err) => {
  console.error('\n❌ Uncaught migration error:', err)
  process.exit(1)
})
