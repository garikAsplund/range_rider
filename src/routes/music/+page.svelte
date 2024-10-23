<script lang="ts">
	import { onMount } from 'svelte';
	import HomeButton from '$lib/components/HomeButton.svelte';
	import BandInfo from '$lib/components/BandInfo.svelte';

	let navbarHeight: number = $state(0);

	onMount(() => {
		const navbar = document.getElementById('main_navbar');
		if (navbar) {
			navbarHeight = navbar.offsetHeight;
		}
	});
</script>

<svelte:head>
  <title>The Range Rider | Music</title>
  <meta name="description" content="Enjoy live music at The Range Rider in Enterprise, Oregon." />
</svelte:head>

<div
	class="relative flex flex-col items-center justify-center w-full md:bg-black/80 bg-black/70"
	style="height: calc(100vh - {navbarHeight}px);"
>
	<HomeButton />

	<BandInfo />
</div>
