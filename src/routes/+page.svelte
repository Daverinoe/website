<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Daverinoe's home page" />
</svelte:head>

<section>
	<h1>
		Welcome to the landing page!
	</h1>

	<h2>
		Showing off some skills.
	</h2>

	<p>
		David, what are you on about? This is just a website.
		You are correct! However, this website is made using <a href="https://kit.svelte.dev/">Sveltekit and Vite</a>, then <a href="https://www.docker.com/">Docker</a>ized my app, uploaded the container to <a href="https://cloud.google.com/">Google Cloud Services</a>, where I've bought and linked a domain name.
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
