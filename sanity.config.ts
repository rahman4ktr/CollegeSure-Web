'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schemas';
import { apiVersion, dataset, projectId } from '@/sanity/env';

export default defineConfig({
  name: 'collegesure-studio',
  title: 'CollegeSure CMS',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Content types
            S.documentTypeListItem('news').title('News'),
            S.documentTypeListItem('notice').title('Notices'),
            S.documentTypeListItem('event').title('Events'),
            S.divider(),
            S.documentTypeListItem('faculty').title('Faculty'),
            S.documentTypeListItem('department').title('Departments'),
            S.documentTypeListItem('course').title('Courses'),
            S.divider(),
            S.documentTypeListItem('gallery').title('Gallery'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
