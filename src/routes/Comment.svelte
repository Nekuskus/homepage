<script>
    export let vertical = false;
    export let style = '';
</script>

<p class:vertical class='visual-comment' {style}>
    <slot/>
</p>

<style>
    p.visual-comment {
        color: rgb(94, 46, 46);
        font-weight: bold;
        font-style: italic;
        font-size: 0.75rem;
        opacity: 60%;
        letter-spacing: 0.1em;
        padding-left: 1em;
        padding-right: 1em;
    }

    p.vertical {
        writing-mode: sideways-rl;
        text-orientation: upright;
    }
</style>