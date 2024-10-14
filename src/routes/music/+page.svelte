<script lang="ts">
	import { onMount } from 'svelte';

	let navbarHeight: number = $state(0);

	const bands: Array<{ name: string; date: string; time: string; link: string }> = [
		{ name: 'Bart Budwig', date: 'Fri 8 Nov ', time: '8 pm', link: 'https://www.bartbudwig.com/' },
		{
			name: 'Margo Cilker',
			date: 'Thu 14 Nov ',
			time: '7 pm',
			link: 'https://www.margocilkermusic.com/'
		},
		{ name: 'The Shook Twins', date: 'Sat 23 Nov ', time: '9 pm', link: 'https://shooktwins.com/' }
	];

	onMount(() => {
		const navbar = document.getElementById('main_navbar');
		if (navbar) {
			navbarHeight = navbar.offsetHeight;
		}
	});
</script>

<div
	class="relative flex flex-col items-center justify-center w-full md:bg-black/80 bg-black/70"
	style="height: calc(100vh - {navbarHeight}px);"
>
	<!-- Home button-->
	<nav class="absolute top-4 right-4 md:justify-center md:flex md:inset-x-0">
		<a href="/">
			<svg
				aria-label="Home"
				class="x1lliihq x1n2onr6 x5n08af"
				fill="white"
				height="24"
				role="img"
				viewBox="0 0 24 24"
				width="24"
			>
				<title>Home</title>
				<path
					d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
				></path>
			</svg>
		</a>
	</nav>

	<!-- Band info -->
	<div class="flex flex-col items-center justify-center w-full max-w-md px-4 -translate-y-12">
		{#each bands as band}
			<div class="flex flex-col w-full space-y-2 text-center">
				<div class="text-xl font-thin">{band.date}</div>
				<a href={band.link} class="text-lg hover:text-gray-300">{band.name}</a>
				<div class="font-thin text-normal">{band.time}</div>
			</div>
			{#if band !== bands[bands.length - 1]}
				<hr class="w-2/3 my-4 border-t border-gray-500" />
			{/if}
		{/each}
	</div>
</div>
