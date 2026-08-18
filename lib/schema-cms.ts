import { News, EventItem, DepartmentDetail, FacultyMember } from '@/lib/types';
import { CANONICAL_SITE_URL, ORGANIZATION_ID } from './schema';
import { getImageUrl } from '@/sanity/lib/image';

export function getNewsArticleSchema(news: News) {
  const articleUrl = `${CANONICAL_SITE_URL}/news/${news.slug?.current || news._id}`;
  const imgUrl = getImageUrl(news.featuredImage, { width: 1200, height: 630 });

  return {
    '@type': 'NewsArticle',
    '@id': `${articleUrl}#article`,
    url: articleUrl,
    headline: news.title,
    description: news.excerpt || news.title,
    ...(imgUrl ? { image: [imgUrl] } : {}),
    datePublished: news.publishedAt || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: news.author || 'CollegeSure Admissions Team',
    },
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };
}

export function getEventSchema(event: EventItem) {
  const eventUrl = `${CANONICAL_SITE_URL}/events#${event._id}`;
  const imgUrl = getImageUrl(event.image, { width: 1200, height: 630 });

  return {
    '@type': 'Event',
    '@id': eventUrl,
    name: event.title,
    description: event.description,
    startDate: event.date,
    ...(imgUrl ? { image: [imgUrl] } : {}),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location || 'CollegeSure Guidance Center',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Katihar',
        addressRegion: 'Bihar',
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@id': ORGANIZATION_ID,
    },
  };
}
