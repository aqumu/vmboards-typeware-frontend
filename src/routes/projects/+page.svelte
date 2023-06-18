<script>
	import { onMount } from 'svelte';
	let first, second, third, text1, text2, text3, wrapper1, wrapper2, wrapper3, activeSwitch;

	function widen1() {
		first.style.width = "80vw"
		second.style.width = "10vw"
		third.style.width = "10vw"
		wrapper1.style.opacity = "1"
		wrapper2.style.opacity = "0"
		wrapper3.style.opacity = "0"

		text1.style.transform = "translateX(-50%)"
		text1.style.left = "50%"
		text1.style.top = "1rem"
		text2.style.transform = "translate(-50%, 203%) rotate(-90deg)"
		text2.style.left = "50%"
		text2.style.top = "0"
		text3.style.transform = "translate(-50%, 170%) rotate(-90deg)"
		text3.style.left = "50%"
		text3.style.top = "0"
	}

	function widen2() {
		first.style.width = "10vw"
		second.style.width = "80vw"
		third.style.width = "10vw"
		wrapper1.style.opacity = "0"
		wrapper2.style.opacity = "1"
		wrapper3.style.opacity = "0"

		text1.style.transform = "translate(-50%, 103%) rotate(-90deg)"
		text1.style.left = "50%"
		text1.style.top = "0"
		text2.style.transform = "translateX(-50%)"
		text2.style.left = "50%"
		text2.style.top = "1rem"
		text3.style.transform = "translate(-50%, 170%) rotate(-90deg)"
		text3.style.left = "50%"
		text3.style.top = "0"
	}

	function widen3() {
		first.style.width = "10vw"
		second.style.width = "10vw"
		third.style.width = "80vw"
		wrapper1.style.opacity = "0"
		wrapper2.style.opacity = "0"
		wrapper3.style.opacity = "1"

		text1.style.transform = "translate(-50%, 103%) rotate(-90deg)"
		text1.style.left = "50%"
		text1.style.top = "0"
		text2.style.transform = "translate(-50%, 203%) rotate(-90deg)"
		text2.style.left = "50%"
		text2.style.top = "0"
		text3.style.transform = "translateX(-50%)"
		text3.style.left = "50%"
		text3.style.top = "1rem"
	}

	onMount(() => {
		widen1();
	});
</script>

<div class="shelf lighter">
	<div class="wrapper white" bind:this={ first } on:mouseover={ widen1 }>
		<div class="book darker">
			<h1 class="header" bind:this={ text1 }>Parts</h1>
			<div class="productWrapper" bind:this={ wrapper1 }>
				<div class="grid-container">
					<div class="grid-item" style="background-image: url('/60_pcb.png');">
						<div class="blur-overlay full-size" on:mouseover={() => activeSwitch = 1} on:mouseleave={() => activeSwitch = 0}>
							<a class="full-size" class:unblurred={activeSwitch === 1} style="transition: opacity 300ms;" href="/projects/vmk">
								<h2 class="name unselectable">60% PCB</h2>
							</a>
						</div>
					</div>
					<div class="grid-item" style="background-image: url('/65_pcb.png');">
						<div class="blur-overlay full-size" on:mouseover={() => activeSwitch = 2} on:mouseleave={() => activeSwitch = 0}>
							<a class="full-size" class:unblurred={activeSwitch === 2} style="transition: opacity 300ms;" href="/projects/vmk">
								<h2 class="name unselectable">65% PCB</h2>
							</a>
						</div>
					</div>
					<div class="grid-item" style="background-image: url('/67_pcb.png');">
						<div class="blur-overlay full-size" on:mouseover={() => activeSwitch = 3} on:mouseleave={() => activeSwitch = 0}>
							<a class="full-size" class:unblurred={activeSwitch === 3} style="transition: opacity 300ms;" href="/projects/vmk">
								<h2 class="name unselectable">67% PCB</h2>
							</a>
						</div>
					</div>
					<div class="grid-item" style="background-image: url('/60_pcb.png');">
						<div class="blur-overlay full-size" on:mouseover={() => activeSwitch = 4} on:mouseleave={() => activeSwitch = 0}>
							<a class="full-size" class:unblurred={activeSwitch === 4} style="transition: opacity 300ms;" href="/projects/vmk">
								<h2 class="name unselectable">60% <wbr />FR4 Plate</h2>
							</a>
						</div>
					</div>
					<div class="grid-item" style="background-image: url('/65_pcb.png');">
						<div class="blur-overlay full-size" on:mouseover={() => activeSwitch = 5} on:mouseleave={() => activeSwitch = 0}>
							<a class="full-size" class:unblurred={activeSwitch === 5} style="transition: opacity 300ms;" href="/projects/vmk">
								<h2 class="name unselectable">65% <wbr />FR4 Plate</h2>
							</a>
						</div>
					</div>
					<div class="grid-item" style="background-image: url('/67_pcb.png');">
						<div class="blur-overlay full-size" on:mouseover={() => activeSwitch = 6} on:mouseleave={() => activeSwitch = 0}>
							<a class="full-size" class:unblurred={activeSwitch === 6} style="transition: opacity 300ms;" href="/projects/vmk">
								<h2 class="name unselectable">67% <wbr />FR4 Plate</h2>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="wrapper darker" bind:this={ second } on:mouseover={ widen2 }>
		<div class="book neutral" style="box-shadow: -10px 0 7px -7px hsl(0, 0%, 60%);">
			<h1 class="header" bind:this={ text2 }>Keyboards</h1>
			<div class="productWrapper" bind:this={ wrapper2 }>
				<div class="product" style="width: calc(33.333% - 10px); background-image: url('/poster.png');">
					<div class="blur-overlay" on:mouseover={() => activeSwitch = 7} on:mouseleave={() => activeSwitch = 0} style="width: 100%; height: 100%;">
						<a class="full-size" class:unblurred={activeSwitch === 7} style="transition: opacity 300ms;" href="/projects/vm35">
								<h2 class="name unselectable">VM35</h2>
						</a>
					</div>
				</div>
				<div class="product" style="width: calc(33.333% - 10px); background-image: url('/vm67.png');">
					<div class="blur-overlay" on:mouseover={() => activeSwitch = 8} on:mouseleave={() => activeSwitch = 0} style="width: 100%; height: 100%;">
						<a class="full-size" class:unblurred={activeSwitch === 8} style="transition: opacity 300ms;" href="">
								<h2 class="name unselectable">VM67</h2>
						</a>
					</div>
				</div>
				<div class="product" style="width: calc(33.333% - 20px); margin-right: 10px; background-image: url('/vm_70_2.jpg');">
					<div class="blur-overlay" on:mouseover={() => activeSwitch = 9} on:mouseleave={() => activeSwitch = 0} style="width: 100%; height: 100%;">
						<a class="full-size" class:unblurred={activeSwitch === 9} style="transition: opacity 300ms;" href="">
								<h2 class="name unselectable">VM70/2</h2>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="wrapper neutral" bind:this={ third } on:mouseover={ widen3 }>
		<div class="book lighter" style="box-shadow: -10px 0 7px -7px hsl(0, 0%, 70%);">
			<h1 class="header" bind:this={ text3 }>Software</h1>
			<div class="productWrapper" bind:this={ wrapper3 }>
				<div class="product" style="width: calc(100% - 20px); margin-right: 10px; background-image: url('/vmk_proto.png');">
					<div class="blur-overlay" on:mouseover={() => activeSwitch = 10} on:mouseleave={() => activeSwitch = 0} style="width: 100%; height: 100%;">
						<a class="full-size" class:unblurred={activeSwitch === 10} style="transition: opacity 300ms;" href="/projects/vmk">
							<h2 class="name unselectable">VMK</h2>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.blur-overlay {
		backdrop-filter: saturate(160%) blur(8px) brightness(90%);
		-webkit-backdrop-filter: saturate(160%) blur(8px) brightness(90%);
		transition: all 175ms linear;
		border-radius: inherit;
	}

	.blur-overlay:hover {
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
	}

	.unblurred {
		opacity: 0;
	}

	@keyframes onHover {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	.product {
		height: calc(100% - 80px);
		margin: 70px 0 10px 10px;
		border-radius: calc(1.3rem - 10px);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
	}

	.shelf {
		display: flex;
		width: 100vw;
		min-height: calc(100vh - 143px);
	}

	.wrapper {
		width: 33.33333vw;
		transition: all 300ms;
	}

	.book {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 1.3rem 0 0 1.3rem;
		transition: all 200ms;
	}

	.header {
		font-family: Raleway, sans-serif;
		font-weight: 300;
		width: min-content;
		position: absolute;
		left: 50%;
		top: 1rem;
		transform: translateX(-50%);
		transition: all 300ms;
		font-size: 2rem;
		margin: 0;
	}

	.grid-container {
		width: 100%;
		height: calc(100% - 70px);
		margin-top: 70px;
		display: inline-grid;
		gap: 10px;
		padding: 10px;
		grid-template-columns: auto auto auto;
	}

	.grid-item {
		border-radius: calc(1.3rem - 10px);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
	}

	.name {
		font-family: Raleway, sans-serif;
		font-weight: 500;
		font-size: 4rem;
		color: white;
		text-align: center;
		width: 80%;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
	}

	.grid-item .name {
		font-size: 3rem;
	}

	.productWrapper {
		width: 100%;
		height: 100%;
		display: flex;
		transition: 250ms;
	}

	.white {
		background-color: white;
	}

    .lighter {
      background-color: hsl(0, 0%, 90%);
    }

    .neutral {
      background-color: hsl(0, 0%, 85%);
    }

	.darker {
	  background-color: hsl(0, 0%, 77%);
	}

	h3 {
		font-family: Raleway, sans-serif;
		font-weight: 400;
		font-size: 1.6rem;
		text-align: center;
		margin: 0;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	a {
		text-decoration: none;
		color: white;
		border-radius: inherit;
	}

	.full-size {
		display: block;
		height: 100%;
		width: 100%;
		border-radius: inherit;
	}
</style>
