<!-- VideoBackground.svelte -->
<div class="video-container">
    <video id="video-background" autoplay loop muted playsinline>
      <source src="/path/to/your/video/file.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  
  <style>
    .video-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
    }
  
    #video-background {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
  