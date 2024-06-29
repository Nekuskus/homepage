<script>
    import Logo from "./Logo.svelte";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import "./styles.css";
</script>

<div class="app">
    <Logo />

    <Header />

    <main>
        <slot />
    </main>

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
