<script>
    import { marked } from "marked";
    import content from "$lib/contents/main.md?raw";
</script>

<svelte:head>
    <title>@kuskus.dev - homepage</title>
    <meta name="description" content="kuskus's homepage" />
</svelte:head>

<section>
    {@html marked.parse(content)}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        flex: 0.8;

        padding-left: var(--outside-padding);
        padding-right: var(--outside-padding);
    }
</style>
