<script>
	let menu;

	function showmenu() {
		menu.style.opacity = '1';
		menu.style.clipPath = 'circle(400%)';
	}

	function hidemenu() {
		menu.style.opacity = '0';
		menu.style.clipPath = 'circle(0%)';
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
	<symbol id="discord" viewBox="0 0 127.14 96.36">
		<path
			d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83 72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.71 56.6.54 80.21h0A105.73 105.73 0 0 0 32.71 96.36 77.7 77.7 0 0 0 39.6 85.25a68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1A105.25 105.25 0 0 0 126.6 80.22h0C129.24 52.84 122.09 29.11 107.7 8.07ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53 48.84 65.69 42.45 65.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53 91.08 65.69 84.69 65.69Z"
		/>
	</symbol>
	<symbol id="instagram" viewBox="0 0 16 16">
		<path
			d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
		/>
	</symbol>
	<symbol id="vk" viewBox="0 0 48 48">
		<path
			d="m0 23c0-10.8423 0-16.26346 3.36827-19.63173s8.78943-3.36827 19.63173-3.36827h2c10.8423 0 16.2635 0 19.6317 3.36827 3.3683 3.36827 3.3683 8.78943 3.3683 19.63173v2c0 10.8423 0 16.2635-3.3683 19.6317-3.3682 3.3683-8.7894 3.3683-19.6317 3.3683h-2c-10.8423 0-16.26346 0-19.63173-3.3683-3.36827-3.3682-3.36827-8.7894-3.36827-19.6317z"
		/>
		<path
			fill="#ffffff"
			d="m13.0009 15h-3.5008c-1.00024 0-1.2003.4708-1.2003.9898 0 .9271 1.18686 5.525 5.5262 11.6061 2.8929 4.1529 6.9687 6.4041 10.6776 6.4041 2.2253 0 2.5006-.5 2.5006-1.3612v-3.1388c0-1 .2108-1.1996.9154-1.1996.5193 0 1.4094.2596 3.4864 2.2619 2.3737 2.3731 2.765 3.4377 4.1001 3.4377h3.5008c1.0003 0 1.5004-.5 1.2119-1.4867-.3157-.9834-1.449-2.4103-2.9528-4.1016-.816-.9641-2.0399-2.0023-2.4108-2.5215-.5192-.6674-.3709-.9641 0-1.5573 0 0 4.2652-6.007 4.7103-8.0463.2225-.7417 0-1.2866-1.0587-1.2866h-3.5008c-.8901 0-1.3005.4708-1.5231.9898 0 0-1.7802 4.3384-4.3022 7.1565-.816.8157-1.1869 1.0753-1.632 1.0753-.2225 0-.5446-.2596-.5446-1.0011v-6.9339c0-.89-.2583-1.2866-1.0002-1.2866h-5.5013c-.5562 0-.8908.413-.8908.8045 0 .8436 1.261 1.0382 1.391 3.4113v5.1542c0 1.13-.2042 1.3349-.6492 1.3349-1.1868 0-4.0737-4.3578-5.7859-9.3442-.3355-.9692-.6721-1.3607-1.5668-1.3607z"
		/>
	</symbol>
</svg>

<header>
	<nav class="navbar navbar-expand-sm">
		<div class="container-fluid">
			<a href="/"
				><img
					id="brand"
					height="20px"
					src="/brand-logo.png"
					alt="logo"
					on:mouseover={ hidemenu }
				/></a
			>
			<button
				class="navbar-toggler-custom"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-sm-0">
					<li class="nav-item">
						<a class="nav-link underline" id="projects" href="/projects" on:mouseover={ showmenu } on:click={ hidemenu }>Projects</a>
					</li>
					<li class="nav-item">
						<a class="nav-link underline" href="/updates" on:mouseover={ hidemenu }>Updates</a>
					</li>
					<li class="nav-item">
						<a class="nav-link underline" href="/contact-us">Contact Us</a>
					</li>
					<li class="nav-item">
						<a class="nav-link underline" href="/info">Info</a>
					</li>
				</ul>
				<ul id="menu" bind:this={ menu } on:mouseleave={ hidemenu } on:click={ hidemenu }>
					<li style="margin-top: 8px"><a class="dropdown-item" href="/projects/vm35">VM35</a></li>
					<li><a href="" class="dropdown-item disabled">VM70/2 (Soon)</a></li>
					<li><a href="" class="dropdown-item disabled">VM67 (Soon)</a></li>
					<li><hr class="dropdown-divider" style="margin: 4px 0" /></li>
					<li><a class="dropdown-item" style="margin-bottom: 8px" href="/projects/vmk">VMK Firmware</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header>
<main>
	<slot />
</main>
<div class="container">
	<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
		<div class="col-md-4 d-flex align-items-center">
			<span class="text-muted">&copy; 2022 VMboards typeware</span>
		</div>
		<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
			<li class="ms-3">
				<a class="text-muted" href="https://discord.gg/XJ9pgZzQHW"
					><svg class="bi" width="24" height="24"><use xlink:href="#discord" /></svg></a
				>
			</li>
			<li class="ms-3">
				<a class="text-muted" href="https://www.instagram.com/vmboards/"
					><svg class="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a
				>
			</li>
			<li class="ms-3">
				<a class="text-muted" href="https://vk.com/vmboards"
					><svg class="bi" width="24" height="24"><use xlink:href="#vk" /></svg></a
				>
			</li>
		</ul>
	</footer>
</div>
<!--TODO fix menu for media query-->

<style lang="scss">
	#brand {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.navbar {
		background-color: white;
	}

	.nav-item {
		padding: 8px;
	}

	.nav-link {
		font-family: Raleway, sans-serif;
		color: black;
		display: inline-block;
		position: relative;
		padding: 0 !important;
	}

	#menu {
		z-index: 1000;
		position: absolute;
		top: 51px;
		right: 188px;
		width: 160px;
		height: 170px;
		background-color: white;
		padding: 0;
		opacity: 0;
		transition: all 100ms;
		transform-origin: top;
		border-width: 1px;
		border-style: solid;
		border-color: black;
		border-radius: 0.55rem;
	}

	.dropdown-item {
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 15px;
		font-family: 'Raleway', sans-serif;
		font-weight: 400;
		color: black;
	}

	.dropdown-item:hover {
		background-color: #eeeeee;
	}

	.disabled {
		color: #8b8b8b;
	}

	.underline:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: black;
		transform-origin: bottom right;
		transition: transform 0.15s ease-out;
	}

	.underline:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	/*Mimicking Bootstrap's navbar toggler to make new breakpoint*/
	.navbar-toggler-custom {
		padding: 0.25rem;
		background-color: transparent; /*remove default button style*/
		line-height: 1;
		border-style: unset;
	}

	@media (min-width: 576px) {
		.navbar-toggler-custom {
			display: none;
		}
	}

	.bi {
		vertical-align: -0.125em;
		fill: currentColor;
	}

	.flex-wrap {
		margin-bottom: 0 !important;
	}

	.text-muted {
		font-family: Poppins, sans-serif;
	}
</style>
