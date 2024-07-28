<script>
    import Comment from "./Comment.svelte";
</script>

<header>
    <h1>
        <a href="/">
            <span id="at">@</span><span id="https">https://</span><span
                id="userhandle"
                >kuskus.dev<Comment style="display: inline;"
                    >TODO: Add couscous spelling and pronunciation
                    variations</Comment
                ></span
            >
        </a>
    </h1>
</header>

<style lang="scss">
    header {
        padding-left: var(--outside-padding);
        padding-top: var(--outside-padding);
        padding-right: var(--outside-padding);
        padding-bottom: 1em;
    }

    h1 {
        font-weight: bold;
        text-align: left;
    }

    h1 span#at {
        display: inline-block;
        margin-right: 0.25em;
        font-size: 1.25em;

        color: var(--color-theme-1);
    }

    h1 span#https {
        display: none;
        position: relative;

        left: -1em;
        margin-right: 0.25em;
        font-size: 1.25em;

        color: var(--color-theme-1);
        opacity: 0;
    }

    a {
        color: unset;
        text-decoration: none;
    }

    @media (min-width: 600px) {
        h1:hover {
            & span#https {
                display: inline-block;
                position: relative;

                animation: slide-in 0.5s forwards;
            }

            & span#at {
                display: inline-block;
                position: relative;

                animation: slide-out 0.5s forwards;
            }

            & span#userhandle {
                display: inline-block;
                position: relative;
                left: -1.25em;
            }
        }
    }

    @keyframes slide-in {
        0% {
            opacity: 0;
            top: -1em;
        }
        100% {
            opacity: 1;
            top: 0;
        }
    }

    @keyframes slide-out {
        0% {
            opacity: 1;
            top: 0;
        }
        100% {
            opacity: 0;
            top: 1em;
        }
    }
</style>
