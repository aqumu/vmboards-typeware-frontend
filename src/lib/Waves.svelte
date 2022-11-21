<svelte:window bind:scrollY={y}/>
<script>
    import { onMount } from 'svelte';
    import waves from "../modules/waves.js";
    export let resize = true;
    let y;

    onMount(() => {
        let canvas = document.getElementsByClassName('bend');
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight - 56;
    });
</script>

<div class="background">
    <span id="text" style="transform: translateY({y / 7 - 37}%);">VMboards typeware</span>
    {#if !resize}
        <canvas class="bend" use:waves></canvas>
    {:else}
        <canvas class="bend" use:waves resize></canvas>
    {/if}
</div>

<style>
    #text {
        position: absolute;
        text-align: center;
        width: 100%;
        top: 50%;
        color: #f5f5f5;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        font-size: 10vw;
    }

    .background {
        background: linear-gradient(3deg, #ffffff, #86a3c0);
        height: calc(100vh - 56px);
    }

    .bend {
        position: absolute;
    }

    /* Scale canvas with resize attribute to full size */
    canvas[resize] {
        width: 100vw;
        height: calc(100vh - 56px);
    }

    @media screen and (-webkit-min-device-pixel-ratio:0)
    and (min-resolution:.001dpcm) {
        canvas { width: calc(100vw - 15px); }
    }

    /* fix canvas width for firefox*/
    @supports (-moz-appearance:none) {
        canvas { width: 100%; }
    }
</style>
