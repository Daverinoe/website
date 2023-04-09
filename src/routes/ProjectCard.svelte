<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    export let project;
    let isDrawerOpen = false;

    export let selected = false;
    const dispatch = createEventDispatcher();

    let isMoreInfoVisible = false;

    function handleClick(event) {
        event.stopPropagation();
        dispatch("click");
        isDrawerOpen = !isDrawerOpen;
        if (isDrawerOpen) {
            setTimeout(() => {
                isMoreInfoVisible = true;
            }, 1000);
        } else {
            isMoreInfoVisible = false;
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    $: {
        if (!selected) {
            isDrawerOpen = false;
            isMoreInfoVisible = false;
        }
    }
</script>

<div
    class="Game"
    class:selected
    class:open={selected && isDrawerOpen}
    tabindex="-1"
    on:click={handleClick}
    on:keydown={handleKeyDown}
    style="background-image: url({project.image}); background-size: cover; background-repeat: no-repeat;"
/>

<div class="center-card" class:open={selected && isDrawerOpen}>
    <div
        class={`banner ${isDrawerOpen ? "open" : ""}`}
        style="background-image: url({project.banner_image}); background-size: contain;"
    />
    <div
        class="more-info"
        class:open={isMoreInfoVisible}
        class:initial={!isMoreInfoVisible}
    >
        <img src={project.screenshot} alt={project.alt} />
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
        <div class="spacer" />
    </div>
</div>

<style>
    /* Game card CSS */
    .Game {
        display: flex;
        opacity: 0.6;
        flex-direction: column;
        position: relative;
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 2vw;
        padding: 0px;
        transition: all 0.5s ease;
        width: 15vw;
        height: 15vw;
    }

    .Game:not(selected):hover {
        opacity: 1;
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
        transform: translateY(-1vh);
    }

    .Game.selected {
        opacity: 1;
        transform: translateY(-1vh);
    }

    /* Center card CSS */
    .center-card {
        position: fixed;
        visibility: hidden;
        opacity: 0;
        top: 16.67%;
        left: 16.67%;
        width: 66.67%;
        height: 66.67%;
        transition: opacity 0.5s ease, visibility 0.5s ease;
        border-radius: 32px;
        /* background-color: #222222aa; */
        overflow: hidden;
    }

    .center-card.open {
        opacity: 1;
        visibility: visible;
        z-index: 11;
    }

    .center-card p {
        color: black;
    }

    /* The banner image that appears. Has black magic to animate it. */
    .banner {
        height: 0;
        border-radius: 32px 0px 0px 0px;
        transform-origin: center;
        transform: scaleX(0.005);
    }

    .banner.open {
        height: 33%;
        transform: scaleX(1);
        transition: height 0.5s ease, transform 0.5s ease;
        transition-delay: 0s, 0.5s;
    }

    .banner::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 1);
        opacity: 1;
        transition: opacity 1s ease;
        transition-delay: 0.5s;
    }

    .banner.open::after {
        opacity: 0;
    }

    /* The drawer that slides up to display more information on the game. */
    .more-info {
        position: absolute;
        display: flex;
        justify-content: space-between;
        opacity: 1;
        top: 33%;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        transition: transform 0.5s ease;
        transition-delay: 0.5s;
        overflow: auto;
        padding: 10px;
        border-radius: 0 0 32px 32px;
        background-color: #ffffff;
        color: black;
    }

    .more-info.open {
        transform: translateY(0%);
    }

    .more-info.initial {
        transform: translateY(100%);
        opacity: 0;
    }

    .spacer {
        width: 0;
    }
</style>