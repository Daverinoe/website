<script lang="ts">
    import { onMount } from "svelte";

    let player: YT.Player;

    onMount(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        const initializePlayer = () => {
            if (typeof YT === "undefined") {
                setTimeout(initializePlayer, 100);
                return;
            }

            player = new YT.Player("player", {
                height: "100%",
                width: "100%",
                videoId: "hRrBnI5L0u8",
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    modestbranding: 1,
                    loop: 1,
                    playlist: "hRrBnI5L0u8",
                    showinfo: 0,
                    rel: 0,
                    mute: 1,
                },
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                    },
                },
            });
        };

        if (!("YT" in window)) {
            (window as any).YT = {};
        }

        if (!("onYouTubeIframeAPIReady" in window)) {
            (window as any).onYouTubeIframeAPIReady = initializePlayer;
        } else {
            initializePlayer();
        }
    });
</script>

<div class="youtube-container">
    <div id="player" />
</div>

<style>
    .youtube-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
    }

    #player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
