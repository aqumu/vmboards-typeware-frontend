<script>
  import { onMount } from 'svelte';

  onMount(() => {
    
    let
      canvas = document.getElementById('canv'),
      ismouseover = false,
      current = 0;
    
    const
      delta = 16, // 16ms for 60fps
      length = 60,
      images = new Array(length),
      context = canvas.getContext("2d");
    
    canvas.width = 560;
    canvas.height = 820;
    
    function SetIsoverTrue() {
      ismouseover = true;
    }
    
    function SetIsoverFalse() {
      ismouseover = false;
    }
    
    canvas.onmouseover = function() {
      SetIsoverTrue();
    }
    
    canvas.onmouseleave = function() {
      SetIsoverFalse();
    }
    

    for (let i = 1; i <= length; i++) {
      const image = new Image();
      image.src = "../" + i + ".webp"
      images[i-1] = image;
    }
    
    function drawFrame(ctx, imgs) {
      if (ismouseover && current < length - 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        current++
      }
      if (!ismouseover && current > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        current--
      }  
      ctx.drawImage(imgs[current], 0, 0);
    }
    
    setInterval(drawFrame, delta, context, images);
    
  });
</script>

<div class="parent">
  <canvas id="canv" resize></canvas>
</div>

<style>
  .parent {
      position: relative;
      max-height: calc(100vh - 56px);
      max-width: calc(calc(100vh - 56px) * 8 / 9);
      width: 100%;
      aspect-ratio: 8/9;
      margin: auto 0;
      align-content: center;
      justify-content: center;
  }

  #canv {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: calc(100vh - 56px);
      height: 100%;
      width: 100%;
  }
</style>
