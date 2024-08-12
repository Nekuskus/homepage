<script>
    import Logo from "./Logo.svelte";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Router from "./Router.svelte";
    import Comment from "./Comment.svelte";
    import "./styles.css";
    $: size = 0;
</script>

<svelte:window bind:innerWidth={size} />

<div class="app">
    <Logo />

    <Router />

    <Comment vertical style="position: absolute; right: 0; top: 35%">
        TODO: Language selector here...
    </Comment>

    <Header />

    <main>
        <slot />
    </main>

    {#if size > 1200}
        <Comment style="position: absolute; left: 0; bottom: 0;">
            TODO: layout selector (portfolio, neocities), theme selector: (day,
            night); saved in cookies
        </Comment>

        <Comment style="position: absolute; right: 0; bottom: 0;">
            TODO: media progress tracker<br />&lt;pre&gt; (maybe), no outline,
            bars
        </Comment>
    {/if}

    <Footer />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0;
        box-sizing: border-box;
    }
</style>
