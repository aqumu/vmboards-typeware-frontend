<script>
	import { onMount } from 'svelte';

	let video1,
		video2,
		img1,
		img2,
		opacity1,
		opacity2,
		exploded = false,
		cantoggle = true,
		target1,
		target2,
		target3,
		y,
		details,
		groupbuy;

	onMount(() => {
		video2.currentTime = '1'; //this is to make page loading more seamless
		img1.style.opacity = '1';
		img2.style.opacity = '0';
		setTimeout(setpos, 500);
		setTimeout(checkpos, 500);
	});

	function togglecantoggle() {
		cantoggle = !cantoggle;
	}

	function toggleimg1() {
		if (img1.style.opacity === '0') {
			img1.style.opacity = '1';
		} else {
			img1.style.opacity = '0';
		}
	}

	function toggleimg2() {
		if (img2.style.opacity === '0') {
			img2.style.opacity = '1';
		} else {
			img2.style.opacity = '0';
		}
	}

	function togglevid() {
		if (cantoggle === true) {
			if (exploded === false) {
				togglecantoggle();
				setTimeout(togglecantoggle, 1050);
				video1.currentTime = '1' - video2.currentTime;
				setTimeout(toggleimg2, 1000);
				toggleimg1();
				video1.style.opacity = '1';
				video2.style.opacity = '0';
				video1.play();
				video2.pause();
				exploded = true;
			} else {
				togglecantoggle();
				setTimeout(togglecantoggle, 1050);
				video2.currentTime = '1' - video1.currentTime;
				setTimeout(toggleimg1, 1000);
				toggleimg2();
				video2.style.opacity = '1';
				video1.style.opacity = '0';
				video2.play();
				video1.pause();
				exploded = false;
			}
		}
	}

	function checkpos() {
		if (y <= details - 4) {
			target1.style.opacity = '1';
			target2.style.opacity = '0';
			target3.style.opacity = '0';
		} else if (y <= groupbuy - 4) {
			target1.style.opacity = '0';
			target2.style.opacity = '1';
			target3.style.opacity = '0';
		} else {
			target1.style.opacity = '0';
			target2.style.opacity = '0';
			target3.style.opacity = '1';
		}
	}

	function setpos() {
		details = document.getElementById('details').offsetTop;
		groupbuy = document.getElementById('group-buy').offsetTop;
	}

	window.onscroll = checkpos;
	window.onresize = setpos;
</script>

<svelte:window bind:scrollY={y} />

<main>
	<div class="subheader">
		<div class="targetbox">
			<div class="targetwrap" on:click={() => window.scrollTo(0, 0)}>
				<img
					alt=""
					bind:this={target1}
					class="target-bg"
					src="data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='%23333' stroke-width='2' stroke-dasharray='4%2c6' stroke-dashoffset='30' stroke-linecap='round'/%3e%3c/svg%3e"
				/>
				<div>overview</div>
			</div>

			<div class="targetwrap" on:click={() => window.scrollTo(0, details)}>
				<img
					alt=""
					bind:this={target2}
					class="target-bg"
					src="data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='%23333' stroke-width='2' stroke-dasharray='4%2c6' stroke-dashoffset='30' stroke-linecap='round'/%3e%3c/svg%3e"
				/>
				<div>details</div>
			</div>

			<div class="targetwrap" on:click={() => window.scrollTo(0, groupbuy)}>
				<img
					alt=""
					bind:this={target3}
					class="target-bg"
					src="data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='%23333' stroke-width='2' stroke-dasharray='4%2c6' stroke-dashoffset='30' stroke-linecap='round'/%3e%3c/svg%3e"
				/>
				<div>group buy</div>
			</div>
		</div>
	</div>
	<div class="section" style="position: relative; top: -40px; margin-bottom: -40px;">
		<div class="container">
			<div
				class="row screenheight align-items-center"
				style="height: calc(100vh - 56px) !important; margin: 0;"
			>
				<div class="col-6 firstcol">
					<div class="video-wrapper" on:click={togglevid}>
						<video id="videoelement1" src="/assembly.webm" style="z-index: 1" bind:this={video2}></video>
						<video id="videoelement2" src="/explosion.webm" style="z-index: 0" bind:this={video1}></video>
						<img
							bind:this={img1}
							style="bind:opacity={opacity1}"
							class="img"
							src="/poster.png"
							alt="VM35 assembled"
						/>
						<img
							bind:this={img2}
							style="bind:opacity={opacity2}"
							class="img"
							src="/poster2.png"
							alt="VM35 exploded"
						/>
					</div>
				</div>
				<div class="col-6">
					<h1>Meet the VM35.</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="section dark">
		<div class="container">
			<div class="row screenheight" style="margin: 0;">
				<div class="col-6 justify-content-center d-flex" style="margin: auto 0; padding-left: 0;">
					<img class="image" src="/vm1.png" alt="VM35 render" />
				</div>
				<div class="col-6 align-content-center" style="margin: auto 0; padding-right: 0;">
					<h2 class="overview-text">
						Use it however you want, for whatever you want and feel no difference.
					</h2>
					<h4 class="overview-text">
						Each one of the 35 hotswappable keys can be remapped to your liking, and certain keys
						can be switched for 2U ones to fit every possible setup.
					</h4>
				</div>
			</div>
		</div>
	</div>
	<div class="section light">
		<div class="container">
			<div class="row screenheight" style="margin: 0;">
				<div class="col-6 justify-content-center" style="margin: auto 0; padding-left: 0;">
					<h2 class="overview-text">Take it wherever you want and don't worry about charging.</h2>
					<h4 class="overview-text">
						Unbelievable battery life is achieved thanks to BLE support and using a high capacity
						battery.
					</h4>
				</div>
				<div class="col-6 justify-content-center d-flex" style="margin: auto 0; padding-right: 0;">
					<img class="image" src="/vm2.png" alt="another VM35 render" />
				</div>
			</div>
		</div>
	</div>
	<div class="section dark">
		<div class="container">
			<div class="row screenheight" style="margin: 0;">
				<div class="col-6 justify-content-center d-flex" style="margin: auto 0; padding-left: 0;">
					<img class="image" src="/vm3.png" alt="also VM35 render" />
				</div>
				<div class="col-6 align-content-center" style="margin: auto 0; padding-right: 0;">
					<h2 class="overview-text">A remarkable combination of look, feel and sound.</h2>
					<h4 class="overview-text">
						Gasket mount, FR4 plate and PCB mount stabilizers contribute to the board's soft typing
						feel and warm sound.
					</h4>
				</div>
			</div>
		</div>
	</div>
	<div class="section padding light" id="details">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<h2>Finishes</h2>
				</div>

				<div class="col-8">
					<div class="d-flex">
						<p class="label" style="margin-left: 7%">Black Acrylic/<wbr />Black PCB</p>
						<p class="label">Smoked Acrylic/<wbr />White PCB</p>
						<p class="label" style="margin-right: 7%">Clear Acrylic/<wbr />White PCB</p>
					</div>
					<img src="/finishes.png" class="image" alt="available VM35 finishes" />
				</div>
			</div>
		</div>
	</div>
	<div class="section padding dark">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<h2>Features</h2>
				</div>

				<div class="col-4">
					<ul>
						<li>USB-C connector</li>
						<li>Acrylic body</li>
						<li>Gasket mount</li>
						<li>5 pin switch support</li>
						<li>Kailh hotswap sockets</li>
					</ul>
				</div>

				<div class="col-4">
					<ul>
						<li>PCB mount stabilizer support</li>
						<li>FR4 plate with copper coated holes</li>
						<li>ZMK support</li>
						<li>BLE support</li>
						<li>Up to 6 months of lifetime</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="section padding light">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<h2>Dimensions</h2>
				</div>

				<div class="col-4">
					<img src="/dimensions_1.png" class="image" style="width: 85%;" alt="" />
				</div>
				<div class="col-4">
					<img src="/dimensions_2.png" class="image" style="width: 85%;" alt="" />
				</div>
			</div>
		</div>
	</div>
	<div class="section dark padding">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<h2>Tech specs</h2>
				</div>

				<div class="col-3 justify-content-start" style="padding-right: 0">
					<ul class="list">
						<li>Microcontroller</li>
						<li>Protocol</li>
						<li>Flash</li>
						<li>RAM</li>
						<li>Battery</li>
						<li style="border-bottom: none;">Core</li>
					</ul>
				</div>

				<div class="col-5" style="padding-left: 0">
					<ul class="list" style="text-align: end">
						<li>Nordic nRF52840</li>
						<li>BLE 4.2/5.0</li>
						<li>1MB</li>
						<li>256KB</li>
						<li>1100mAh LiPo</li>
						<li style="border-bottom: none;">ARM Cortex-M4</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="section padding light">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<h2>In the Box</h2>
				</div>

				<div class="col-8">
					<ul>
						<li>Acrylic case parts (top and bottom)</li>
						<li>FR4 plate</li>
						<li>PCB</li>
						<li>Daughterboard</li>
						<li>Battery</li>
						<li>FFC cable</li>
						<li>Mounting screws</li>
						<li>Rubber bumpons, gaskets</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="section dark" id="group-buy">
		<div class="container">
			<div class="row screenheight padding" style="margin: 0;">
				<div class="col-6 justify-content-center" style="margin: auto 0; padding-left: 0;">
					<div
						id="carouselExampleIndicators"
						class="carousel carousel-dark slide"
						data-bs-ride="carousel"
					>
						<div class="carousel-inner" style="border-radius: 0.55rem 0.55rem 0.3rem 0.3rem;">
							<div class="carousel-item active">
								<img src="/vm1.png" class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item">
								<img src="/vm2.png" class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item">
								<img src="/vm3.png" class="d-block w-100" alt="..." />
							</div>
						</div>

						<button
							class="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="prev"
						>
							<span class="carousel-control-prev-icon" aria-hidden="true" />
							<span class="visually-hidden">Previous</span>
						</button>
						<button
							class="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="next"
						>
							<span class="carousel-control-next-icon" aria-hidden="true" />
							<span class="visually-hidden">Next</span>
						</button>

						<div class="carousel-indicators">
							<button
								type="button"
								class="thumbo active"
								style="background-image: url(/vm1.png); margin-left: 0; border-bottom-left-radius: 0.55rem"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="0"
								aria-current="true"
								aria-label="Slide 1"
							/>
							<button
								type="button"
								class="thumbo"
								style="background-image: url(/vm2.png);"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							/>
							<button
								type="button"
								class="thumbo"
								style="background-image: url(/vm3.png); margin-right: 0; border-bottom-right-radius: 0.55rem"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							/>
						</div>
					</div>
				</div>
				<div class="col-6 align-content-center" style="margin: auto 0; padding-right: 0;">
					<div style="margin-left: 1rem;">
						<h2 style="margin-bottom: 1rem;">VM35 Macropad</h2>
						<h4>Finishes:</h4>
						<ul>
							<li>Black Acrylic/Black PCB</li>
							<li>Smoked Acrylic/White PCB</li>
							<li>Transparent/White PCB</li>
						</ul>
						<h4>Options:</h4>
						<ul>
							<li>Single board ($110)</li>
							<li>Bundle of two boards ($210)</li>
						</ul>
						<h4>Dates:</h4>
						<ul>
							<li>Group Buy: x day of y month - x day of z month</li>
							<li>Shipping: 2023 Q4</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="section light" style="height: calc(100vh - 86px); text-align: center;">
		<div class="container" style="height: 100%">
			<div class="row">
				<h1 style="padding-top: 40px; font-size: 33.3333px;">Vendors</h1>
			</div>
			<div class="row" style="height: calc(100% - 80px)">
				<div class="col-6" style="height: fit-content; margin: auto 0;">
					<h3>Europe</h3>
					<ul>
						<li>vendor6</li>
						<li>vendor7</li>
						<li>vendor8</li>
					</ul>
					<h3 style="margin-top: 20px;">North America</h3>
					<ul>
						<li>vendor1</li>
						<li>vendor2</li>
						<li>vendor3</li>
						<li>vendor4</li>
						<li>vendor5</li>
					</ul>
				</div>
				<div class="col-6" style="height: fit-content; margin: auto 0;">
					<h3>Asia</h3>
					<ul>
						<li>vendor9</li>
						<li>vendor10</li>
						<li>vendor11</li>
						<li>vendor17</li>
					</ul>
					<h3 style="margin-top: 20px;">Australia</h3>
					<ul>
						<li>vendor12</li>
						<li>vendor13</li>
						<li>vendor14</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.thumbo {
		aspect-ratio: 16 / 9;
		width: 33.3333%;
		height: auto;
		border-width: 0;
		border-radius: 0.3rem;
		background-size: contain;
		opacity: 0.75;
	}

	.carousel-indicators {
		position: relative;
		margin: 6px 0 0 0;
	}

	.active {
		opacity: 1;
	}

	.carousel-control-next,
	.carousel-control-prev {
		margin-bottom: 20%;
	}

	.label {
		width: 33.33333%;
		margin: 0 0 0.9rem 0;
		text-align: center;
		font-size: 0.9rem;
	}

	.padding {
		padding: 40px 0;
	}

	.padding > .container > .row {
		height: auto;
	}

	.list {
		width: 100%;
		padding: 0;
		margin: 0;
	}

	.list > li {
		padding: 3px 0;
		border-bottom: solid 1px #8da1ab;
	}

	li {
		padding: 3px 0;
		font-size: 1.2rem;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	.subheader {
		position: sticky;
		top: 0;
		height: 40px;
		width: 100%;
		display: flex;
		z-index: 500;
		background: rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-top: 0;
	}

	.targetbox {
		flex-direction: row;
		margin-left: auto;
		margin-right: 12px;
		height: 100%;
		display: flex;
	}

	.targetwrap {
		position: relative;
		overflow: hidden;
		padding: 0 5px;
		margin: auto 7px auto 7px;
		font-family: Raleway, sans-serif;
		font-weight: 400;
		border-radius: 7px;
		cursor: pointer;
	}

	.target-bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 150ms ease;
	}

	.firstcol {
		padding-right: 0;
		padding-left: 0;
		height: calc(100vh - 56px);
		display: flex;
		justify-content: center;
	}

	.video-wrapper {
		position: relative;
		max-height: calc(100vh - 56px);
		max-width: calc(calc(100vh - 56px) * 8 / 9);
		width: 100%;
		aspect-ratio: 8/9;
		margin: auto 0;
		z-index: 2;
		align-content: center;
		justify-content: center;
		cursor: pointer;
	}

	#videoelement1,
	#videoelement2,
	.img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-height: calc(100vh - 56px);
		transition: opacity 50ms;
		width: 100%;
	}

	.image {
		width: 100%;
		max-height: 100vh;
		object-fit: cover;
		border-radius: 0.55rem;
	}

	.container {
		font-family: 'Raleway', sans-serif;
	}

	.screenheight {
		height: 100vh;
	}

	h1,
	h2,
	h3 {
		font-weight: 400;
		margin: 0;
	}

	h4 {
		font-weight: 300;
		color: #0d0e10;
		font-size: 1.4rem;
		margin-top: 1rem;
	}

	.overview-text {
		width: 80%;
		margin-left: 2rem;
	}

	wbr:after {
		content: '\200B';
	}
</style>
