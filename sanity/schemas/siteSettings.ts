import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one instance in the studio
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, e.g. 917979864304',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter / X', value: 'twitter' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'GitHub', value: 'github' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
    }),
    defineField({
      name: 'announcementBanner',
      title: 'Announcement Banner',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enabled',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'text',
          title: 'Banner Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Banner Link',
          type: 'url',
        },
        {
          name: 'variant',
          title: 'Style Variant',
          type: 'string',
          options: {
            list: [
              { title: 'Info (Blue)', value: 'info' },
              { title: 'Success (Green)', value: 'success' },
              { title: 'Warning (Orange)', value: 'warning' },
              { title: 'Important (Red)', value: 'important' },
            ],
          },
          initialValue: 'info',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global configuration',
      };
    },
  },
});
