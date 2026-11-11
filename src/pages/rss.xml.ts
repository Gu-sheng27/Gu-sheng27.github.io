import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../site';

export async function GET(context: APIContext) {
  const writing = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `${site.title} — Writing`,
    description: site.description,
    site: String(context.site ?? site.url),
    items: writing.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/writing/${entry.id}/`,
    })),
    customData: '<language>en</language>',
  });
}