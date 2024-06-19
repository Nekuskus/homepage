<script>
	// import { page } from '$app/stores';
	import kuskus_logo from "$lib/images/kuskus-cropped.jpg";
</script>

<header>
	<h1>
		<span id='at'>@</span><span id="https">https://</span>kuskus.dev
	</h1>
	<!-- TODO: Add couscous spelling and pronunciation variations -->
</header>

<div id="avatar-wrapper">
    <a
        title="Bartekbas, CC BY-SA 2.5 &lt;https://creativecommons.org/licenses/by-sa/2.5&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Kuskus.jpg"
        ><img id="avatar-logo" alt="Kuskus" src={kuskus_logo} />
    </a>
</div>

<style>
	header {
		/* display: flex; */

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
	
    @media (min-width: 600px) {
        h1:hover span#https {
            display: inline-block;
            position: relative;
            
            animation: slide-in 0.5s forwards;
        }
        
        h1:hover span#at {
            display: inline-block;
            position: relative;
            
            animation: slide-out 0.5s forwards;
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

	div#avatar-wrapper {
		position: absolute;
		top: var(--outside-padding);
		right: var(--outside-padding);
	}

	img#avatar-logo {
		width: 24vw;
		border-radius: 100%;
	}
	
	@media (max-width: 1200px) {
		div#avatar-wrapper {
			top: calc(var(--outside-padding) / 2);
			right: calc(var(--outside-padding) / 2);
		}

		img#avatar-logo {
			width: 16.56vw;
		}
	}

	@media (max-width: 1600px) {
		img#avatar-logo {
			width: 12vw;
		}
	}
</style>
