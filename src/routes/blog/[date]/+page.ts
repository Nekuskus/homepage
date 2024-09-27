import { redirect, error, } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const fmodule = import.meta.glob(`$lib/contents/blog/*.md`, {
        query: "?raw",
        import: "default",
    });
    const iterFiles = Object.entries(fmodule);
    const entries = iterFiles.map(([path, resolver]) => {
        return path
            .replaceAll("\\", "/")
            .split("/")
            .at(-1)
            ?.replace(".md", "")
            .split(" ")!;
    }).filter(split => split[0] == params.date);

    if (entries.length == 1) {
        redirect(303, `/blog/${entries[0][0]}/${entries[0][1]}`);
    } else if (entries.length > 1) {
        redirect(300, '/blog')
    }
    
    error(404)
}

export const prerender = true;
// This path does not currently get prerendered, and it might be scrapped altogether.