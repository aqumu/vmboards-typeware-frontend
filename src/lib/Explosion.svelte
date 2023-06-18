<script>
  import explosion from '../modules/explosion.js';

  export let resize = true;
</script>

<div class="parent">
  {#if !resize}
    <canvas class="canv" use:explosion></canvas>
  {:else}
    <canvas class="canv" use:explosion resize></canvas>
  {/if}
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

  .canv {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: calc(100vh - 56px);
      height: 100%;
      width: 100%;
      z-index: 1000;
  }
  .canv[resize] {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: calc(100vh - 56px);
      width: 100%;
  }
</style>
