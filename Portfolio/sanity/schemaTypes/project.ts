import { defineType, defineField, defineArrayMember } from 'sanity'

export const simpleFeature = defineType({
  name: 'simpleFeature',
  title: 'Simple Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Feature Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'text' },
  },
})

export const featureItem = defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Feature Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'description' },
  },
})

export const featureSection = defineType({
  name: 'featureSection',
  title: 'Feature Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Features in this Section',
      type: 'array',
      of: [defineArrayMember({ type: 'featureItem' })],
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})

export const simpleChallenge = defineType({
  name: 'simpleChallenge',
  title: 'Simple Challenge',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Challenge Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'text' },
  },
})

export const challengeItem = defineType({
  name: 'challengeItem',
  title: 'Structured Challenge',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Challenge Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})

export const project = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legacyId',
      title: 'Legacy ID (Numeric URL ID)',
      type: 'number',
      description: 'Numeric ID matching /projects/[id] URLs (e.g. 1, 2, 3...)',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend Development', value: 'Frontend Development' },
          { title: 'Backend Development', value: 'Backend Development' },
          { title: 'Full Stack Development', value: 'Full Stack Development' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort projects in gallery (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
      description: 'Toggle visibility on the public portfolio website',
      initialValue: true,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      description: 'Screenshots and gallery items for detail page & lightbox',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Summary shown on homepage gallery cards',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Overview Description',
      type: 'text',
      rows: 6,
      description: 'Full overview rendered on project detail page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'Can be simple feature strings or structured sections with items',
      of: [
        defineArrayMember({
          type: 'simpleFeature',
          title: 'Simple Feature',
        }),
        defineArrayMember({
          type: 'featureSection',
          title: 'Structured Feature Section',
        }),
      ],
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      description: 'Can be simple challenges or structured challenge items with title and description',
      of: [
        defineArrayMember({
          type: 'simpleChallenge',
          title: 'Simple Challenge',
        }),
        defineArrayMember({
          type: 'challengeItem',
          title: 'Structured Challenge',
        }),
      ],
    }),
    defineField({
      name: 'solution',
      title: 'Solution & Approach',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository URLs',
      type: 'array',
      of: [defineArrayMember({ type: 'url' })],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Date or release period (e.g. 2026-03-01 or 2026)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client / Organization',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'coverImage',
      legacyId: 'legacyId',
    },
    prepare({ title, subtitle, media, legacyId }) {
      return {
        title: `${legacyId ? `#${legacyId} ` : ''}${title}`,
        subtitle,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Legacy ID (Ascending)',
      name: 'legacyIdAsc',
      by: [{ field: 'legacyId', direction: 'asc' }],
    },
    {
      title: 'Date (Newest)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
