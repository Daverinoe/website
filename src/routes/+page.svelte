<script>
	import ProjectCard from "./ProjectCard.svelte";
	import YoutubeBackground from "./YoutubeBackground.svelte";

	let projects = [
		{
			title: "Morning coffee",
			link: "https://daverinoe.itch.io/morning-coffee",
			image: "game_images/morning_coffee.png",
			alt: "A happy canvas bag of coffee with a bloodstain in the corner.",
			description: "A brief parable about coffee.",
			// Add more information if needed
		},
		{
			title: "Rail Assembly",
			link: "https://daverinoe.itch.io/rail-assembly",
			image: "game_images/rail_assembly.png",
			alt: "Train waiting on rails.",
			description:
				"Move track pieces in front of your train to prevent disaster.",
			// Add more information if needed
		},
		{
			title: "Pizza Delivery",
			link: "https://daverinoe.itch.io/pizza-delivery",
			image: "game_images/pizza_delivery.png",
			alt: "Pizza box with a logo of a goat on it.",
			description:
				"A totally normal game about delivering a pizza to a hedge maze at night.",
			// Add more information if needed
		},
		{
			title: "Alarm Cluck",
			link: "https://daverinoe.itch.io/alarm-cluck",
			image: "game_images/alarm_cluck.png",
			alt: "A pixel art rooster.",
			description:
				"Waking the farm is your duty in this Jump King clone.",
			// Add more information if needed
		},
		{
			title: "God's Gambit",
			link: "https://velopman.itch.io/gods-gambit",
			image: "game_images/gods_gambit.png",
			alt: "A fresco of an Incan god.",
			description:
				"Take on the Gods to become the True God of Gaming in this twist on a classic.",
			// Add more information if needed
		},
		{
			title: "Unfinished bull game",
			link: "https://daverinoe.itch.io/uubtgwueuraattdtsy",
			image: "game_images/bull_game.png",
			alt: "A low-poly bull.",
			description:
				"Take revenge on a thief who dared to steal from you in a pottery store.",
			// Add more information if needed
		},
		{
			title: "The Huggen",
			link: "https://velopman.itch.io/the-huggen",
			image: "game_images/the_huggen.png",
			alt: "A squid with its tentacles outreached.",
			description:
				"Spread your love to the ships above in this QWOP inspired game.",
			// Add more information if needed
		},
		{
			title: "PHD: Printer Hate Department",
			link: "https://liioni.itch.io/phd",
			image: "game_images/phd.png",
			alt: "A pixel art man",
			description: "Debug the world with this puzzle platformer!",
			// Add more information if needed
		},
		{
			title: "No Thyme to Waste",
			link: "https://daverinoe.itch.io/no-thyme-to-waste",
			image: "game_images/no_thyme_to_waste.png",
			alt: "A pixel art fish",
			description:
				"Save the world one sale at a time in this aquaponics inspired game.",
			// Add more information if needed
		},
	];

	let selectedProject = null;

	function handleCardClick(id) {
		selectedProject = id === selectedProject ? null : id;
	}
</script>

<YoutubeBackground />
<div class="spacer" />
<div class="content">
	<section id="about">
		<div class="text-column">
			<h1>Who is Daverinoe?</h1>

			<p>
				I have had a rather round about path in life. My biggest career
				accomplishments so far have been graduating with a PhD in
				computational quantum information, then moving into a software
				engineer position. But over the past year or two, I've really
				decided on what my hobby should be:
			</p>

			<p class="shaky">GAME DEVELOPMENT!</p>

			<p>
				I, like many many others, decided "Hey, games are fun to play! I
				bet they're fun to make!" and gave it a go. To my absolute
				delight, the challenges involved in game development are
				incredibly fun to work on, and give me a real sense of
				satisfaction to solve. From gameplay programming and making the
				perfect feeling character controller, creating audio solutions
				that meet the needs of the game, to bashing my head repeatedly
				against the unyielding brick wall that is shader code.
			</p>

			<p>I enjoy all of it.</p>

			<p>
				So where's the proof? The proof, dear readers, is in my <a
					href="#projects">Projects</a
				> page. There, you'll find pages on every project I worked on, and
				a brief post-mortem of the challenges I overcame, and the problems
				I didn't. These are, one and all (as of writing on March 2023), game-jam
				games. A couple of my projects have promise to become full-fledged
				releases with proper polish, but that remains to be seen.
			</p>

			<p>
				So enjoy, dear reader (and dare I say, friend?). I hope the walk
				through my game development career is enlightening for you!
			</p>
		</div>
	</section>

	<section id="projects">
		<div class="games">
			{#each projects as project, index}
				<ProjectCard
					{project}
					id={index}
					selected={selectedProject === index}
					on:click={() => handleCardClick(index)}
				/>
			{/each}
		</div>
	</section>

	<section id="contact" />
</div>
{#if selectedProject !== null}
	<div
		class="overlay"
		tabindex="-1"
		on:click={() => handleCardClick(null)}
		on:keydown={(event) => event.key === "Enter" && handleCardClick(null)}
	/>
{/if}

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: white;
		text-align: center;
		background-color: #4a6d8c; /* Add your desired background color here */
		min-height: 100vh; /* Make sure the content takes up at least the full viewport height */
		width: 100%; /* Make the content take up the full width of the viewport */
	}

	.spacer {
		height: 66.67vh;
	}

	.games {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		background-color: rgba(
			0,
			0,
			0,
			0.5
		); /* Add a semi-transparent background color */
	}
</style>
