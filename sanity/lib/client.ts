import { apiVersion, dataset, projectId } from '@/sanity/env';
import { createClient } from 'next-sanity';

/**
 * Public read-only Sanity client — safe for server & client components.
 */
export const client = createClient({
  projectId: projectId || 'dummy_project_id',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: true,
});

/**
 * Server-only Sanity client with write token.
 */
export const writeClient = createClient({
  projectId: projectId || 'dummy_project_id',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
