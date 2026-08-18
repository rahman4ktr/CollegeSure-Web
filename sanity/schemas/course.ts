import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Course Name',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Medical & Paramedical', value: 'medical' },
          { title: 'Engineering', value: 'engineering' },
          { title: 'Graduation', value: 'graduation' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryLabel',
      title: 'Category Label',
      type: 'string',
      description: 'Display label for the category (e.g. "Medical & Paramedical")',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'overview',
      title: 'Course Overview',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'careerInfo',
      title: 'Career Opportunities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'admissionProcess',
      title: 'Admission Process Steps',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'availableColleges',
      title: 'Available Colleges',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    }),
    defineField({
      name: 'relatedCourses',
      title: 'Related Courses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'course' }] }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'SEO Title', type: 'string' },
        { name: 'description', title: 'SEO Description', type: 'text', rows: 2 },
        { name: 'ogImage', title: 'OG Image', type: 'image' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'categoryLabel',
    },
  },
});
