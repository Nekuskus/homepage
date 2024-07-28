<script>
    import Logo from "./Logo.svelte";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Router from "./Router.svelte";
    import Comment from "./Comment.svelte";
    import "./styles.css";
</script>

<div class="app">
    <Logo />

    <Router />

    <Comment vertical style='position: absolute; right: 0; top: 35%'>
        TODO: Language selector here...
    </Comment>

    <Header />

    <main>
        <slot />
    </main>


    <Comment style='position: absolute; left: 0; bottom: 0;'> 
        Add theme selector: portfolio, neocities; saved in cookies
    </Comment>

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
