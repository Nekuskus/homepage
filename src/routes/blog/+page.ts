import { marked } from "marked";
    
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const fmodule = import.meta.glob("$lib/contents/blog/*.md", {
        query: "?raw",
        import: "default",
    });
    const iterFiles = Object.entries(fmodule);
    const entries = await Promise.all(iterFiles.map(async ([path, resolver]) => {
        const content = (await resolver()) as string;
        const metadata = path
            .replaceAll("\\", "/")
            .split("/")
            .at(-1)
            ?.replace(".md", "")
            .split(" ")!;
        const header = marked
            .lexer(content)
            .find((token) => token.type === "heading");

        if (!header) {
            return {
                heading: "Header missing?",
                date: metadata[0],
                title: metadata[1],
            };
        }

        return {
            heading: (header as any).text,
            date: metadata[0],
            title: metadata[1],
        };
    }));
    return {
        entries: entries.reverse()
    };
}

export const prerender = true;
