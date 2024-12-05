<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;

    import { marked } from "marked";
    import Comment from "../../../Comment.svelte";
</script>

<svelte:head>
    <title>@kuskus.dev - blog - {data.title}</title>
    <meta name="description" content="kuskus's blog" />
</svelte:head>

<Comment>TODO: CSS</Comment>

<time datetime="{data.date.split('-').reverse().join('-')}">
    <p style="text-align: center;">
        <i style="font-size: small;">[{data.date}]</i>
    </p>
</time>

<!-- TODO: Set an outline on the blogpost and overall format it much more nicely... -->

<article>
    {@html marked.parse(data.content)}
</article>

<style>
    article {
        margin: 0 auto 0 auto;
        max-width: 64rem;

        padding-left: var(--outside-padding);
        padding-right: var(--outside-padding);
    }
</style>