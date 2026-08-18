import { apiVersion, dataset, projectId } from '@/sanity/env';

let createClientFn: any = null;

try {
  // Try importing next-sanity dynamically or via require
  const nextSanity = require('next-sanity');
  createClientFn = nextSanity.createClient;
} catch {
  // Package not installed yet — fallback dummy client
  createClientFn = () => ({
    fetch: async () => null,
  });
}

/**
 * Public read-only Sanity client — safe for server & client components.
 */
export const client = createClientFn({
  projectId: projectId || 'dummy',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: true,
});

/**
 * Server-only Sanity client with write token.
 */
export const writeClient = createClientFn({
  projectId: projectId || 'dummy',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
