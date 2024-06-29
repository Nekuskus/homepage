<script>
    import kuskus_logo from "$lib/images/kuskus-cropped.jpg";
    import Comment from "./Comment.svelte";
    $: size = 0;
</script>

<svelte:window bind:innerWidth={size} />

<div id="avatar-wrapper">
    {#if size > 1600}    
        <Comment>
            &lt;!-- TODO: Make logo appropriately smaller --&gt;
        </Comment>
    {/if}
    <a
        title="Bartekbas, CC BY-SA 2.5 &lt;https://creativecommons.org/licenses/by-sa/2.5&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Kuskus.jpg"
        ><img id="avatar-logo" alt="Kuskus" src={kuskus_logo} />
    </a>
</div>

<style lang="scss">
    div#avatar-wrapper {
        position: absolute;
        top: var(--outside-padding);
        right: var(--outside-padding);
    }

    img#avatar-logo {
        width: 24vw;
        border-radius: 100%;
    }
    
    @media (max-width: 1200px) {
        div#avatar-wrapper {
            top: calc(var(--outside-padding) / 2);
            right: calc(var(--outside-padding) / 2);
        }

        img#avatar-logo {
            width: 16.56vw;
        }
    }

    @media (max-width: 1600px) {
        img#avatar-logo {
            width: 12vw;
        }
    }
</style>