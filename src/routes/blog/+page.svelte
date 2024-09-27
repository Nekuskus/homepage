<script lang="ts">
    export let data: import('./$types').PageData;
    import Comment from "../Comment.svelte";
</script>

<svelte:head>
    <title>@kuskus.dev - blog</title>
    <meta name="description" content="kuskus's blog" />
</svelte:head>

<Comment>TODO: CSS</Comment>

<article>
    <ul>
        <Comment>TODO: Make these blocks!</Comment>
        {#each data.entries as { heading, date, title }}
            <li>
                <a href="/blog/{date}/{title}">
                    {heading} [{date}]
                </a>
            </li>
        {/each}
    </ul>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        
        flex: 1;

        margin: auto;
        max-width: 64rem;

        padding-left: var(--outside-padding);
        padding-right: var(--outside-padding);
    }
</style>
