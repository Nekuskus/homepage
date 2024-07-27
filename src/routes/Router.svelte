<script>
    import { page } from "$app/stores";
</script>

<div id="router">
    <ul>
        <li aria-current={$page.url.pathname === '/' ? "page" : undefined}>
            <a href="/">main</a>
        </li>
        <li aria-current={$page.url.pathname.startsWith('/blog') ? "page" : undefined}>
            <a href="/blog">blog</a>
        </li>
        <li aria-current={$page.url.pathname.startsWith('/misc') ? "page" : undefined}>
            <a href="/misc">misc.</a>
        </li>
    </ul>
</div>

<style lang="scss">
    div#router {
        position: absolute;
        top: 0;
        right: 30%;
    }

    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }

    li:not(:first-child)::before {
        content: "🍇";
        margin-left: 1em;
        margin-right: 1em;
    }

    li:not([aria-current="page"]) a {
        text-decoration: underline;
    }
</style>
