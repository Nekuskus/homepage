<script>
    import { marked } from "marked";
    import content from "$lib/contents/main.md?raw";
</script>

<svelte:head>
    <title>@kuskus.dev - homepage</title>
    <meta name="description" content="kuskus's homepage" />
</svelte:head>

<article>
    {@html marked.parse(content)}
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        flex: 1;
        max-width: 64rem;
        padding-left: var(--outside-padding);
        padding-right: var(--outside-padding);
    }
</style>
