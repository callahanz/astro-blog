import { defineCollection, reference, z } from 'astro:content';
import { glob /*, file*/ } from 'astro/loaders';

/*const blogCollectionn = defineCollection({
    loader: glob({
        pattern: 'xx/x.md',
        base: './src/content/blog',
    }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),

        // Relacion
        author: z.string(),

        // Relacion
        tags: z.array(z.string()),
    }),
});*/

const blogCollection = defineCollection({
    // Utilizamos el loader "glob" para cargar los archivos de Markdown (ajusta el patrón y la base según tu estructura)
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/blog',
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            // En Astro v5 ya no se admite el uso de .refine() en el helper image()
            image: image(),

            // Relacion
            // author: z.string(),
            author: reference('author'),

            // Relacion
            tags: z.array(z.string()),

            isDraft: z.boolean().default(false),
        }),
});

const authorCollection = defineCollection({
    // Utilizamos el loader "file" para cargar un archivo JSON o datos desde otra fuente
    // loader: file('src/data/authors.json'),
    loader: glob({
        pattern: '**/*.yml',
        base: './src/content/author',
    }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            avatar: image(),
            twitter: z.string(),
            linkedIn: z.string(),
            github: z.string(),
            bio: z.string(),
            subtitle: z.string(),
        }),
});

export const collections = {
    blog: blogCollection,
    author: authorCollection,
};
