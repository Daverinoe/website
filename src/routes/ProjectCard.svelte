<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    export let project;
    let isDrawerOpen = false;

    export let id;
    export let selected = false;
    const dispatch = createEventDispatcher();

    function handleClick(event) {
        event.stopPropagation();
        dispatch("click");
        isDrawerOpen = !isDrawerOpen;
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleClick();
        }
    }
</script>

<div
    class="Game"
    class:selected={selected}
    tabindex="-1"
    on:click={handleClick}
    on:keydown={handleKeyDown}
>
    <img src={project.image} alt={project.alt} />
    <h2>
        <a href={project.link}>{project.title}</a>
    </h2>
    <p>{project.description}</p>
    <div class="more-info" class:open={isDrawerOpen}>
        <!-- Add more information about the game here -->
        <p>More information about {project.title}.</p>
    </div>
</div>

<style>
    .Game {
        position: relative;
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 16px;
        padding: 16px;
        transition: all 0.3s ease;
        width: 300px;
    }

    .Game:hover {
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
        transform: translateY(-4px);
    }

    .more-info {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        background-color: white;
        color: black;
        padding: 0px;
        border-radius: 16px;
        transition: max-height 0.3s ease, padding 0.3s ease;
    }

    .Game:hover .more-info {
        max-height: 50px;
        padding: 16px;
    }

    .more-info.open {
        max-height: 200px;
        padding: 16px;
    }

    .Game.selected {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
    }

    .Game:not(.selected) {
        transform: translateY(250px);
        opacity: 0.5;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
</style>
