import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    year: z.coerce.number().optional(),
    status: z.string().optional(),
    tags: z.array(z.string()).optional(),
    tech: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ base: "./src/content/gallery", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    image: z.string(), // "/images/gallery/fanart/piece.png"
    category: z.enum(["graphic-design", "fanart", "favorites", "nsfw"]),
    tags: z.array(z.string()).optional(),

    // credit / sourcing
    artistName: z.string().optional(),
    artistUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),

    // metadata
    date: z.coerce.date().optional(),
    nsfw: z.boolean().optional(),
    favorite: z.boolean().optional(),
  }),
});

export const collections = { blog, projects, gallery };
