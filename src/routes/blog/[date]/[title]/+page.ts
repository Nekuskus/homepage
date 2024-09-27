/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let content = (await import(`$lib/contents/blog/${params.date} ${params.title}.md?raw`)).default;
    return {
        date: params.date,
        title: params.title,
        content: content
    }
}

export const prerender = true;
