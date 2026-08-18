import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

/**
 * Generate a Sanity image URL with optional transformations.
 * Returns null if source is missing.
 */
export function urlForImage(source: any): any {
  if (!source) return null;
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}

/**
 * Get a ready-to-use image URL string with sensible defaults.
 * Returns fallback URL if image is missing.
 */
export function getImageUrl(
  source: any,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    fallback?: string;
  }
): string {
  const {
    width = 800,
    height,
    quality = 80,
    fallback = '',
  } = options || {};

  const img = urlForImage(source);
  if (!img) return fallback;

  try {
    let url = img.auto('format').quality(quality);
    if (width) url = url.width(width);
    if (height) url = url.height(height);
    return url.url();
  } catch {
    return fallback;
  }
}

/**
 * Generate responsive image props for Next.js Image or <img> tags.
 */
export function getResponsiveImageProps(
  source: any,
  alt: string,
  options?: {
    widths?: number[];
    fallback?: string;
  }
) {
  const { widths = [400, 800, 1200], fallback = '' } = options || {};

  const img = urlForImage(source);
  if (!img) {
    return { src: fallback, alt, srcSet: undefined };
  }

  try {
    const src = img.auto('format').quality(80).width(widths[1] || 800).url();
    const srcSet = widths
      .map((w: number) => `${img.auto('format').quality(80).width(w).url()} ${w}w`)
      .join(', ');

    return { src, alt, srcSet };
  } catch {
    return { src: fallback, alt, srcSet: undefined };
  }
}
