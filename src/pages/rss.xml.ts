import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Puedes acceder aqui http://localhost:4321/rss.xml para verlo
/*export const GET: APIRoute = ({ params, request }) => {
    return new Response(
        JSON.stringify({
            path: new URL(request.url).pathname,
        }),
    );
};*/

// Puedes acceder aqui http://localhost:4321/rss.xml para verlo
export const GET: APIRoute = async (context) => {
    const { params, request, site } = context;

    const blogPosts = await getCollection('blog');

    return rss({
        // `<title>` field in output xml
        title: 'RSS Test Blog',
        // `<description>` field in output xml
        description: 'A humble Astronaut’s guide to the stars',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#site
        site: site ?? '',
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        // items: [],
        items: blogPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            // Compute RSS link from post `id`
            // This example assumes all posts are rendered as `/blog/[id]` routes
            link: `/blog/${post.id}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
        // (optional) ex. use your stylesheet from "public/rss/styles.xsl"
        // stylesheet: '/rss/styles.xsl',
        // stylesheet: '/styles/rss.xsl', /* descomenta esta ultima si quieres verlo con estilos aplicados */
    });
};
