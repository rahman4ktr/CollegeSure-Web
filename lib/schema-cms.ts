import { News, EventItem } from '@/lib/types';
import { CANONICAL_SITE_URL, ORGANIZATION_ID } from './schema';

export function getNewsArticleSchema(news: News) {
  const articleUrl = `${CANONICAL_SITE_URL}/news/${news.slug?.current || news._id}`;

  return {
    '@type': 'NewsArticle',
    '@id': `${articleUrl}#article`,
    url: articleUrl,
    headline: news.title,
    description: news.excerpt || news.title,
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

  return {
    '@type': 'Event',
    '@id': eventUrl,
    name: event.title,
    description: event.description,
    startDate: event.date,
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
