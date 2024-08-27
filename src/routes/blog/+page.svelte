<script lang="ts">
    import Comment from '../Comment.svelte';

    import { marked } from "marked";
    const fmodule = import.meta.glob("$lib/contents/blog/*.md", {
        query: "?raw",
        import: "default",
    });
    const iterFiles = Object.entries(fmodule);
    const entries = iterFiles.map(async ([path, resolver]) => {
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
    });
</script>

<svelte:head>
    <title>@kuskus.dev - blog</title>
    <meta name="description" content="kuskus's blog" />
</svelte:head>

<Comment>TODO: CSS</Comment>

<ul>
    {#each entries as promise}
        {#await promise then { heading, date, title }}
            <li>
                <a href="/blog/{date}/{title}">
                    {heading} [{date}]
                </a>
            </li>
        {/await}
    {/each}
</ul>
