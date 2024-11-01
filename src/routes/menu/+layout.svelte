<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import HomeButton from '$lib/components/HomeButton.svelte';
	import BackButton from '$lib/components/BackButton.svelte';
	import MobileFooter from '$lib/components/MobileMenuFooter.svelte';
	import MenuNav from '$lib/components/MenuNav.svelte';

	let { children } = $props();
	let navbarHeight: number = $state(0);
	let footerHeight: number = $state(0);

	onMount(() => {
		const navbar = document.getElementById('main_navbar');
		if (navbar) {
			navbarHeight = navbar.offsetHeight;
		}
		const footer = document.getElementById('menu_footer');
		if (footer) {
			footerHeight = footer.offsetHeight;
		}
	});
</script>

<svelte:head>
  <title>The Range Rider | Menu</title>
  <meta name="description" content="Enjoy great food at The Range Rider in Enterprise, Oregon." />
</svelte:head>

<div
	class="flex flex-col items-center w-full md:bg-black/80 bg-black/70"
	style="height: calc(100vh - {navbarHeight}px);"
>
	<!-- Home button -->
	<!-- <HomeButton /> -->

	<!-- Menu nav -->
	<div
		class="relative hidden w-full px-6 m-16 font-thin lg:w-2/3 xl:w-3/5 top-2 md:items-center md:justify-between md:flex-row md:flex md:text-xl"
	></div>
	<MenuNav />

	<!-- For spacing -->
	<div
		class="flex justify-center {$page.data.path.includes('Menu/')
			? 'items-start'
			: 'items-center'} w-full {$page.data.path.includes('Specials')
			? 'overflow-hidden'
			: 'overflow-auto'}
			"
		style="height: calc(100% - {footerHeight}px);"
	>
		<!-- Menu content -->
		<div class="flex justify-center w-full h-full">
			{@render children?.()}
		</div>
	</div>
</div>
