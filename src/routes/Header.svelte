<script>
	// import { page } from '$app/stores';
	import kuskus_logo from "$lib/images/kuskus-cropped.jpg";
</script>

<header>
	<h1>
		<span title="https://">@</span>kuskus.dev
	</h1>
	<!-- TODO: Add couscous spelling and pronunciation variations -->

	<div id="avatar-wrapper">
		<a
			title="Bartekbas, CC BY-SA 2.5 &lt;https://creativecommons.org/licenses/by-sa/2.5&gt;, via Wikimedia Commons"
			href="https://commons.wikimedia.org/wiki/File:Kuskus.jpg"
			><img id="avatar-logo" alt="Kuskus" src={kuskus_logo} />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;

		padding-left: var(--outside-padding);
		padding-top: var(--outside-padding);
		padding-right: var(--outside-padding);
		padding-bottom: 1em;

		& h1 {
			font-weight: bold;
		}
	}

	h1::first-letter {
		margin-right: 0.25em;
		font-size: 1.25em;

		color: var(--color-theme-1);
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

	@media (max-width: 1600) {
		img#avatar-logo {
			width: 12vw;
		}
	}
</style>
