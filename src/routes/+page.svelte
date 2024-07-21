<script>
    import Comment from "./Comment.svelte";
</script>

<svelte:head>
	<title>@kuskus.dev - homepage</title>
	<meta name="description" content="kuskus's homepage" />
</svelte:head>

<Comment style='position: absolute; top: 1em; right: 30%;'>
    &lt;!-- TODO: Subpage routing here --&gt;
</Comment>

<section>
	<p>
		<code>kuskus.dev</code> (or <b>Nekuskus</b>) is a
		<a href="https://wikipedia.org/wiki/Programmer" title="Wikipedia:Programmer"
			>computer user</a
		>
		who goes by
		<sup
			>[<i
				><a
					href="https://wikipedia.org/wiki/Wikipedia:Citation_needed"
					title="Wikipedia:Citation needed"
					><span style="text-wrap: nowrap;"
						title="This claim needs references to reliable sources. (December 2022)"
						>citation needed</span
					></a
				></i
			>]</sup
		>, and is in the process of slowly setting up this website.
	</p>

    <p>You can reach me over email at <code>contact at this domain</code>, or over discord at <code>kuskus.dev</code>.</p>

	
    <Comment vertical style='position: absolute; right: 0; top: 35%'>
        &lt;!-- TODO: Language selector here... --&gt;
    </Comment>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
		flex: 0.8;

		padding-left: var(--outside-padding);
		padding-right: var(--outside-padding);
	}
</style>
