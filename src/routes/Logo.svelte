<script>
    import kuskus_logo from "$lib/images/kuskus-cropped.jpg";
</script>

<div id="avatar-wrapper">
    <a
        title="Bartekbas, CC BY-SA 2.5 &lt;https://creativecommons.org/licenses/by-sa/2.5&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Kuskus.jpg"
        target="_blank"
        ><img id="avatar-logo" alt="Kuskus" src={kuskus_logo} />
    </a>
</div>

<style lang="scss">
    div#avatar-wrapper {
        position: absolute;
        top: calc(var(--outside-padding) / 2);
        right: calc(var(--outside-padding) / 2);
    }

    img#avatar-logo {
        height: clamp(43px, 5vh, 65px);
        border-radius: 100%;
    }
</style>