<script>
	let showMenu = false;
 	 let isAnimated = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function handleKeydown(event) {
		if (event.key === "Enter" || event.key === " ") {
			toggleMenu();
		}
	}

	 // Animate the header after one second
	 setTimeout(() => {
		isAnimated = true;
	}, 1000);
</script>

<nav class:isAnimated={isAnimated}>
	<div class="logo">
		<span class="highlight">Dave</span>rinoe
	</div>
	<div class="menu">
		<ul class={showMenu ? "show" : ""}>
			<li><a href="#about">About</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
		<div
			class="hamburger"
			on:click={toggleMenu}
			on:keydown={handleKeydown}
			tabindex="-1"
		>
			<div />
			<div />
			<div />
		</div>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: left;
		padding: 20px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 1000;
		transition: transform 0.5s ease-in-out;
		transform: translateY(-100%);
	}

	 /* Apply animation only if isAnimated is true */
	 .isAnimated {
		transform: translateY(0%);
	}

	.logo {
		margin-right: 50px;
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: #222;
	}

	.highlight {
		color: #f57c00;
		margin-right: 0px;
	}

	.menu {
		position: relative;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		padding-top: 3%;
	}

	li {
		margin-right: 20px;
	}

	a {
		text-decoration: none;
		color: #222;
		font-size: 1rem;
		font-weight: bold;
		letter-spacing: 1px;
		transition: color 0.3s ease-in-out;
	}

	a:hover {
		color: #f57c00;
	}

	.hamburger {
		display: none;
		cursor: pointer;
		margin-right: 20px;
		padding: 10px;
		position: relative;
		z-index: 1000;
	}

	.hamburger div {
		width: 25px;
		height: 3px;
		background-color: #222;
		margin: 5px;
		transition: all 0.3s ease-in-out;
	}

	@media (max-width: 768px) {

		nav {
			justify-content: space-between;
		}

		.logo {
			font-size: 1.2rem;
		}

		ul {
			display: none;
			flex-direction: column;
			position: fixed;
			top: 80px;
			left: 0;
			width: 100%;
			background-color: #fff;
			padding: 20px;
			margin: 0;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			z-index: 999;
		}

		li {
			margin-right: 0;
			margin-bottom: 10px;
		}

		a {
			padding: 10px;
			display: block;
			text-align: center;
			border-bottom: 1px solid #f5f5f5;
			transition: all 0.3s ease-in-out;
		}

		a:hover {
			color: #f57c00;
			background-color: #f5f5f5;
		}

		.show {
			display: flex !important;
		}

		.hamburger {
			display: block;
		}
	}
</style>
