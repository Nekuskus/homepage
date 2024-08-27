/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let content = (await import(`$lib/contents/blog/${params.date} ${params.title}.md?raw`)).default;
    return {
        date: params.date,
        title: params.title,
        content: content
    }
}

// No need to handle 404 errors, prerender will only create existing posts
export const prerender = true;
