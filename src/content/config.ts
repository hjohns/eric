import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
  }),
});

export const collections = {
  sections,
};
