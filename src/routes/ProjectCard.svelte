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

    $:{
        if (!selected){
            isDrawerOpen = false;
        }
    }
</script>

<div
    class="Game"
    class:selected={selected}
    class:open={selected && isDrawerOpen}
    tabindex="-1"
    on:click={handleClick}
    on:keydown={handleKeyDown}
    style="background-image: url({project.image});"
>
    <div class="more-info" class:open={isDrawerOpen}>
        <!-- Add more information about the game here -->
        <p>More information about {project.title}.</p>
    </div>
</div>

<style>
    .Game {
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: #ffffff;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 16px;
        padding: 16px;
        transition: all 0.3s ease;
        width: 300px;
        min-height: 15vh;
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

    .more-info.open {
        max-height: 200px;
        padding: 16px;
    }

    .Game.selected {
        position: fixed;
        bottom: 0;
        top: 16.67vh;
        left: 16.67vw;
        width: 0;
        height: 0;
        z-index: 11;
        background-color: white;
        box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
        transition: width 0.3s ease, height 0.3s ease;
    }

    .Game.selected.open {
        width: 66.67%;
        /* height: 16.67%; */
        overflow-y: auto;
    }

    .Game:not(.selected) {
        opacity: 0.5;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .Game:not(.selected):hover {
        opacity: 1.0;
    }
</style>
