<!-- VideoBackground.svelte -->
<div class="video-container">
    <video id="video-background" autoplay loop muted playsinline>
      <source src="background/WebsiteBackground.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  
  <style>
    .video-container {
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
  
    #video-background {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  </style>
  