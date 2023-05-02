<svelte:head>
  <link rel="preconnect" href="https://www.youtube.com" />
  <link rel="preconnect" href="https://www.googlevideo.com" />
</svelte:head>

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
                videoId: "C6uTPLITspg",
                playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                loop: 1,
                playlist: "C6uTPLITspg",
                showinfo: 0,
                rel: 0,
                mute: 1,
                iv_load_policy: 3, // Hides video annotations
                disablekb: 1, // Disables keyboard controls
                fs: 0, // Hides the fullscreen button
                playsinline: 1 // Ensures the video plays inline on mobile devices
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
        /* position: fixed; */
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        animation: shrink 5s ease-in-out forwards;
        z-index: -1;
    }

    @keyframes shrink {
        0% {
            height: 100vh;
        }
        75% {
            height: 100vh;
        }
        100% {
            height: 66.67vh;
        }
    }

    #player {
        /* position: absolute; */
        height: 100%;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: fill;
    }
</style>
