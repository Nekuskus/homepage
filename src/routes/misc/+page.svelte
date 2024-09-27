<script>
    import { marked } from "marked";
    import content from "$lib/contents/misc.md?raw";
</script>

<svelte:head>
    <title>@kuskus.dev - misc</title>
    <meta name="description" content="kuskus's ???" />
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

        padding-left: var(--outside-padding);
        padding-right: var(--outside-padding);
    }
</style>
