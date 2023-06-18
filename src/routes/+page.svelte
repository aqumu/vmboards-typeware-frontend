<script>
	import Waves from '../lib/Waves.svelte';
</script>

<main>
	<Waves />
	<div class="section light">
		<div class="container">
			<div class="row">
				<div class="col-6" style="margin: auto">
					<img id="animated" src="/poster.png" alt="Macropad render" />
				</div>
				<div class="col-6" style="display: flex;">
					<div class="align-self-center" style="width: 80%;">
						<h1>VM35 Macropad</h1>
						<h2 style="padding-top: 5%;">COMING IN 2022</h2>
						<h3 style="padding-top: 10%;">
							Sign in and keep up to date on the most versatile and powerful macropad yet.
						</h3>
						<div style="padding-top: 10%;">
							<a href="/projects/vm35#" class="btn btn_light btn-primary">Learn More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="section dark">
		<div class="container">
			<div class="row">
				<div class="col-5" style="padding-left: 5%; display: flex;">
					<div class="align-self-center" style="width: 80%;">
						<h1>VMK Firmware</h1>
						<h2 style="padding-top: 5%;">COMING IN 2023</h2>
						<!--                    TODO screenshot for VMK-->
						<h3 style="padding-top: 10%;">
							Download and use the most advanced wireless keyboard firmware
						</h3>
						<div style="padding-top: 10%;">
							<a href="/projects/vmk" class="btn btn_dark btn-primary">Download</a>
						</div>
					</div>
				</div>
				<div class="col-7" style="padding-right: 5%; margin: auto;">
					<img
						src="/vmk_proto.png"
						style="width: 100%; object-fit: cover; max-height: 100vh; border-radius: 0.55rem;"
						alt="VMK screenshot"
					/>
				</div>
			</div>
		</div>
	</div>
	<!--TODO make not download but something more correct for the button-->
	<div class="row row-background justify-content-center">
		<div class="col-6 text-center" style="margin-top: auto; margin-bottom: auto">
			<h1>FR4 Keyboard plates and PCB's</h1>
			<div style="padding-top: 10%;">
				<a href="/projects" class="btn btn_light btn-primary">Shop Now</a>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	img {
		width: 100%;
		object-fit: cover;
		max-height: 100vh;
	}

	.row {
		margin: -6px 0 0 0;
		height: 100vh;
		font-family: 'Raleway', sans-serif;
	}

	.row-background {
		height: 100vh;
		font-family: 'Raleway', sans-serif;
		margin: -6px 0 0 0;
		background-image: url(/plates.webp);
		background-size: cover;
		background-position-x: center;
	}

	h1,
	h2,
	h3 {
		font-weight: 400;
		margin-bottom: 0;
	}

	.btn {
		font-weight: 600;
		font-family: 'Poppins', sans-serif;
		border: 2px solid var(--bs-body-color);
		border-radius: 0.3rem;
		background-color: transparent;
		color: var(--bs-body-color);
	}

	.btn_light:hover {
		background-color: var(--bs-body-color);
		color: #ffffff;
	}

	.btn_dark:hover {
		background-color: var(--bs-body-color);
		color: #eeeeee;
	}
</style>
