// Sanity environment configuration
// These are safe to expose publicly (read-only access)
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy_project_id';
