import { client } from '@/sanity/lib/client';

/**
 * Fetch data from Sanity with automatic error handling.
 * Returns null on failure instead of throwing, so pages can gracefully fallback.
 */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
  options?: {
    revalidate?: number;
    tags?: string[];
  }
): Promise<T | null> {
  const { revalidate = 3600, tags } = options || {};

  try {
    const result = await client.fetch<T>(query, params ?? {}, {
      next: {
        revalidate,
        ...(tags ? { tags } : {}),
      },
    });
    return result;
  } catch (error) {
    // Log server-side only — never expose CMS errors to client
    if (typeof window === 'undefined') {
      console.error('[Sanity Fetch Error]', {
        query: query.slice(0, 100),
        params,
        error: error instanceof Error ? error.message : String(error),
      });
    }
    return null;
  }
}
