import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Writing — one Markdown file per published piece, URL is /writing/<slug>/.
 * `description` is required on purpose: it feeds RSS and the share cards.
 */
const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    lang: z.string().default('en'),
  }),
});

/** Projects — one Markdown file per work entry, URL is /projects/<slug>/. */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    repo: z.url().optional(),
    live: z.url().optional(),
    year: z.number(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

/** Pages — prose that is not a dated piece: About, and anything else later. */
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { writing, projects, pages };