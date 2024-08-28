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

<p style="text-align: center;">
    <i style="font-size: small;">[{data.date}]</i>
</p>

{@html marked.parse(data.content)}
