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

	// Close the menu when the user clicks outside of it
	function handleClick(event) {
		if (showMenu && !event.target.closest(".menu")) {
			showMenu = false;
		}
	}

	// Animate the header after one second
	setTimeout(() => {
		isAnimated = true;
	}, 1000);

	// Listen for clicks outside of the menu
	if (typeof window !== "undefined") {
		window.addEventListener("click", handleClick);
	}
</script>

<nav class:isAnimated>
	<div class="logo">
		<span class="highlight"><a href='#page-top'>Dave</a></span>rinoe
	</div>
	<div class="menu">
		<ul class={showMenu ? "show" : ""}>
			<li class="menu-item"><a href="#about">About</a></li>
			<li class="menu-item"><a href="#projects">Projects</a></li>
			<li class="menu-item"><a href="#contact">Contact</a></li>
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
		background: linear-gradient(#1a2847, #1a284700);
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
		color: #f0f4f3;
	}

	.highlight a {
		color: #328be3;
		margin-right: 0px;
	}

	.menu {
		position: relative;
		background-color: transparent;
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

	.menu-item a {
		text-decoration: none;
		color: #f0f4f3;
		font-size: 1rem;
		font-weight: bold;
		letter-spacing: 1px;
		transition: color 0.3s ease-in-out;
	}

	a:hover {
		color: #328be3;
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
		background-color: #f0f4f3;
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
			background-color: transparent;
			padding: 20px;
			margin: 0;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			z-index: 999;
		}

		li {
			margin-right: 0;
			margin-bottom: 10px;
			border-radius: 8px;
			background-color: #1a2847;
		}

		a {
			padding: 10px;
			display: block;
			text-align: center;
			border-bottom: 0px solid #f5f5f5;
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

		/* Hamburger menu animation */
		.menu-item {
			opacity: 0;
			transform: translateX(100%);
			animation: slideOut 0.5s forwards;
			animation-fill-mode: both;
			outline: #328be3 solid 1px;
		}

		.show .menu-item {
			animation-play-state: running;
			animation: slideIn 0.5s forwards;
			animation-fill-mode: both;
		}

		.menu-item:nth-child(1) {
			animation-delay: 0.1s;
		}

		.menu-item:nth-child(2) {
			animation-delay: 0.2s;
		}

		.menu-item:nth-child(3) {
			animation-delay: 0.3s;
		}

		@keyframes slideIn {
			from {
				opacity: 0;
				transform: translateX(100%);
			}
			to {
				opacity: 1;
				transform: translateX(0);
			}
		}

		@keyframes slideOut {
			from {
				opacity: 1;
				transform: translateX(0);
			}
			to {
				opacity: 0;
				transform: translateX(100%);
			}
		}
	}
</style>
