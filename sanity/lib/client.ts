import { apiVersion, dataset, projectId } from '@/sanity/env';
import { createClient } from 'next-sanity';

const safeProjectId = projectId && /^[a-z0-9-]+$/i.test(projectId) ? projectId : 'dummy-project-id';
const safeDataset = dataset || 'production';

/**
 * Public read-only Sanity client — safe for server & client components.
 */
export const client = createClient({
  projectId: safeProjectId,
  dataset: safeDataset,
  apiVersion: apiVersion || '2024-01-01',
  useCdn: true,
});

/**
 * Server-only Sanity client with write token.
 */
export const writeClient = createClient({
  projectId: safeProjectId,
  dataset: safeDataset,
  apiVersion: apiVersion || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
