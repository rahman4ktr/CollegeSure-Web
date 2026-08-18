import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'document',
      title: 'Attached Document',
      type: 'file',
      description: 'Upload a PDF or document file',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Academic', value: 'academic' },
          { title: 'Examination', value: 'examination' },
          { title: 'Admission', value: 'admission' },
          { title: 'Administrative', value: 'administrative' },
          { title: 'General', value: 'general' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'important',
      title: 'Mark as Important',
      type: 'boolean',
      initialValue: false,
      description: 'Important notices are highlighted at the top',
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'datetime',
      description: 'Notice will be hidden after this date',
    }),
  ],
  orderings: [
    {
      title: 'Important First',
      name: 'importantFirst',
      by: [
        { field: 'important', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      important: 'important',
    },
    prepare({ title, subtitle, important }) {
      return {
        title: important ? `⚠️ ${title}` : title,
        subtitle: subtitle || 'General',
      };
    },
  },
});
