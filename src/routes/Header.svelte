<script>
	// import { page } from '$app/stores';
</script>

<header>
	<h1>
		<span title="https://">@</span>kuskus.dev
	</h1>
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

		color: var(--color-theme-1)
	}
</style>
