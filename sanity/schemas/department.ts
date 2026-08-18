import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'department',
  title: 'Department',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Department Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'image',
      title: 'Department Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'course' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
