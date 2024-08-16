<script>
    import { page } from "$app/stores";
    let emoji;

    let month = new Date().getMonth();
    
    if (month == 11 || month <= 1) { // winter
        emoji = "🍊";
    } else if (month <= 4) { // spring
        emoji = "🍒";
    } else if (month <= 7) { // summer
        emoji = "🍉";
    } else { // autumn
        emoji = "🍇";
    }
</script>

<div id="router" style="--month-emoji: '{emoji}';">
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
    #router {
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
        content: var(--month-emoji);
        margin-left: 1em;
        margin-right: 1em;
    }

    li:not([aria-current="page"]) a {
        text-decoration: underline;
    }
</style>
