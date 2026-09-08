import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageFit: z.enum(['cover', 'contain']).optional(),
    category: z.string().optional(),
    partNumber: z.string().optional(),
    section: z.enum(['Industrial & Field-Ready', 'Meeting & Conferencing', 'Education & Art', 'Other']),
    featured: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { products };
