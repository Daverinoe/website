<script>
	import ProjectCard from "./ProjectCard.svelte";
	import YoutubeBackground from "./YoutubeBackground.svelte";
	import { projects } from "./projects";

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
		); 
	}
</style>
