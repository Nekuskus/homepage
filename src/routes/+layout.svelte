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

    <Comment vertical style="position: fixed; right: 0; top: 35%">
        TODO: Language selector here...
    </Comment>

    <Header />

    <main>
        <slot />
    </main>

    {#if size > 1200}
        <Comment style="position: fixed; left: 0; bottom: 0;">
            TODO: layout selector (portfolio, neocities), theme selector: (day,
            night); saved in cookies
        </Comment>

        <Comment style="position: fixed; left: 0; bottom: 2%;">
            TODO: join a webring
        </Comment>

        <Comment style="position: fixed; right: 0; bottom: 0;">
            TODO: media progress tracker<br />&lt;pre&gt; (maybe), ascii
            outline! (+─|), bars
        </Comment>

    {/if}

    <Footer />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
    }

    main {
        display: flex;
        flex: 1;
        flex-direction: column;

        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
    }
</style>
