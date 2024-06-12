<script>
    import github from "$lib/images/github.svg";
</script>

<footer>
    <p>
        Made with love by <a href="https://github.com/Nekuskus/homepage"><img src={github} alt="GitHub" /> Nekuskus</a>
    </p>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

		padding-left: var(--outside-padding);
		padding-top: 1em;
		padding-right: var(--outside-padding);
		padding-bottom: var(--outside-padding);
    }

    footer a {
        font-weight: bold;
    }

    footer img {
        height: 1.5em;
        vertical-align: bottom;
    }
</style>
