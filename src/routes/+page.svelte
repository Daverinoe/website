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
	<section class="about" id="about">
		<div class="section-highlight">
			<div class="text-column">
				<h1>Who is Daverinoe?</h1>
			</div>
		</div>
		<div class="text-column section-normal">
			<p>
				My journey in life has taken many interesting turns. Some of my
				most significant career accomplishments include obtaining a PhD
				in computational quantum information and working as a software
				engineer. However, over the past couple of years, I've
				discovered a real passion:
			</p>

			<p class="shaky">
				<span style="--char-index:1;">G</span>
				<span style="--char-index:2;">A</span>
				<span style="--char-index:3;">M</span>
				<span style="--char-index:4;">E</span>
				<span style="--char-index:5;" />
				<span style="--char-index:6;">D</span>
				<span style="--char-index:7;">E</span>
				<span style="--char-index:8;">V</span>
				<span style="--char-index:9;">E</span>
				<span style="--char-index:10;">L</span>
				<span style="--char-index:11;">O</span>
				<span style="--char-index:12;">P</span>
				<span style="--char-index:13;">M</span>
				<span style="--char-index:14;">E</span>
				<span style="--char-index:15;">N</span>
				<span style="--char-index:16;">T</span>
				<span style="--char-index:17;">!</span>
			</p>

			<p>
				Like many others, I thought, "Games are fun to play, so they
				must be fun to make!" and decided to give it a try. To my
				delight, the challenges involved in game development proved to
				be incredibly enjoyable and satisfying. I've tackled everything
				from gameplay programming and creating the perfect character
				controller, to designing audio solutions and grappling with
				shader code.
			</p>

			<p>I enjoy every aspect of it.</p>

			<p>
				Curious about my work? You can find the proof in my list of <a
					href="#projects">Projects</a
				>, where I detail my experiences working on each game and discuss
				the challenges I've overcome as well as the problems I haven't. As
				of March 2023, these are all game-jam games. Some projects have the
				potential to become full-fledged releases with proper polish, but
				only time will tell.
			</p>

			<p>
				I hope you find my journey through game development both
				enjoyable and enlightening!
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
		color: #f0f4f3;
		text-align: center;
		background-color: #1a2847;
		min-height: 100vh;
		width: 100%;
	}

	.spacer {
		height: 66.67vh;
	}

	.games {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		max-width: 1200px;
		/* margin: 0 auto; */
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		background-color: #000000ad;
	}

	.section-highlight {
		width: 100vw;
		background-color: #28578d;
		padding: 1rem;
		border-radius: 8px;
	}

	.section-normal {
		background-color: #1a2847;
		padding: 2vw 10vw 2vw 10vw;
		border-radius: 8px;
		font-size: large;
	}

	/* Shaky text */
	.shaky span {
		display: inline-block;
		animation-name: wave;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	.shaky span:nth-child(odd) {
		animation-direction: alternate;
	}

	.shaky span:nth-child(even) {
		animation-direction: alternate-reverse;
	}

	.shaky span {
		animation-delay: calc(0.1s * var(--char-index));
	}

	@keyframes wave {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
</style>
