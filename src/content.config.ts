import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { products };
