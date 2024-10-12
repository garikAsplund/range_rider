<script lang="ts">
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
</script>

<div
	class="relative z-0 flex flex-col items-center justify-center w-full h-screen text-gray-200 bg-black/80"
>
	<!-- Home button in the upper right -->
	<nav class="absolute top-4 md:flex md:inset-x-0 md:justify-center right-4">
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

	<!-- Centered band information -->
	<div class="flex flex-col items-center w-1/2 -translate-y-12">
		{#each bands as band}
			<div class="flex flex-col space-y-2 text-center">
				<div class="text-xl font-thin">{band.date}</div>
				<a href={band.link} class="text-lg hover:text-gray-300">{band.name}</a>
				<div class="font-thin text-normal">{band.time}</div>
			</div>
			<hr class="w-2/3 my-4 border-t border-gray-500" />
		{/each}
	</div>
</div>
