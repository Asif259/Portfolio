import groq from 'groq'

export const PROJECTS_QUERY = groq`
  *[_type == "project" && isPublished == true] | order(displayOrder asc, legacyId asc, _createdAt desc) {
    _id,
    name,
    legacyId,
    "slug": slug.current,
    category,
    displayOrder,
    isPublished,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    description,
    longDescription,
    technologies,
    features,
    challenges,
    solution,
    liveUrl,
    githubUrl,
    date,
    client,
    role
  }
`

export const PROJECT_BY_LEGACY_ID_QUERY = groq`
  *[_type == "project" && legacyId == $legacyId && isPublished == true][0] {
    _id,
    name,
    legacyId,
    "slug": slug.current,
    category,
    displayOrder,
    isPublished,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    description,
    longDescription,
    technologies,
    features,
    challenges,
    solution,
    liveUrl,
    githubUrl,
    date,
    client,
    role
  }
`

export const RELATED_PROJECTS_QUERY = groq`
  *[_type == "project" && category == $category && legacyId != $legacyId && isPublished == true] | order(displayOrder asc, legacyId asc)[0...3] {
    _id,
    name,
    legacyId,
    "slug": slug.current,
    category,
    coverImage {
      asset->{
        _id,
        url
      },
      alt
    },
    description
  }
`

export const ALL_LEGACY_IDS_QUERY = groq`
  *[_type == "project" && isPublished == true && defined(legacyId)][].legacyId
`
