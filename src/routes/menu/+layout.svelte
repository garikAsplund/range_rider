<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let { children } = $props();
	let navbarHeight: number = $state(0);

	onMount(() => {
		const navbar = document.getElementById('main_navbar');
		if (navbar) {
			navbarHeight = navbar.offsetHeight;
		}
	});
</script>

<div
	class="relative flex flex-col items-center w-full md:bg-black/80 bg-black/50"
	style="height: calc(100vh - {navbarHeight}px);"
>
	<!-- Home button -->
	<div class="absolute top-4 right-4 md:justify-center md:flex md:inset-x-0 md:absolute">
		<a href="/" aria-label="Home">
			<svg
				class="x1lliihq x1n2onr6 x5n08af"
				fill="white"
				height="24"
				role="img"
				viewBox="0 0 24 24"
				width="24"
			>
				<path
					d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
				></path>
			</svg>
		</a>
	</div>

	<!-- Back button -->
	<div class="fixed top-4 left-4 md:hidden {$page.data.path.includes('Menu/') ? '' : 'hidden'}">
		<a href="/menu" aria-label="Back to main menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
			>
		</a>
	</div>

	<!-- Menu nav -->
	<div
		class="relative hidden w-full px-6 m-16 font-thin lg:w-2/3 xl:w-3/5 top-2 md:items-center md:justify-between md:flex-row md:flex md:text-xl"
	></div>
	<nav
		class="absolute hidden w-full px-6 m-12 font-thin lg:w-2/3 xl:w-3/5 top-2 md:items-center md:justify-between md:flex-row md:flex md:text-xl"
	>
		<button class="p-6 hover:opacity-85"
			><a
				href="/menu/apps"
				aria-label="Appetizers"
				class={$page.data.path.includes('apps') ? 'border-b' : ''}>Appetizers</a
			></button
		>
		<button class="p-6 hover:opacity-85"
			><a
				href="/menu/entrees"
				class={$page.data.path.includes('entrees') ? 'border-b' : ''}
				aria-label="Entrees">Entrees</a
			></button
		>
		<button class="p-6 hover:opacity-85"
			><a
				href="/menu/burgers"
				class={$page.data.path.includes('burgers') ? 'border-b' : ''}
				aria-label="Burgers">Burgers</a
			></button
		>
		<button class="p-6 hover:opacity-85"
			><a
				href="/menu/sandwiches"
				class={$page.data.path.includes('sandwiches') ? 'border-b' : ''}
				aria-label="Sandwiches">Sandwiches</a
			></button
		>
		<button class="p-6 hover:opacity-85"
			><a
				href="/menu/kids"
				class={$page.data.path.includes('kids') ? 'border-b' : ''}
				aria-label="Kids">Kids</a
			></button
		>
		<button class="p-6 hover:opacity-85"
			><a
				href="/menu/dessert"
				class={$page.data.path.includes('dessert') ? 'border-b' : ''}
				aria-label="Dessert">Dessert</a
			></button
		>
	</nav>

	<div class="flex justify-center w-full h-full overflow-scroll md:!h-fit">
		{@render children?.()}
	</div>

	<footer
		class=" md:fixed md:flex hidden bottom-0 left-0 right-0 z-10 flex-row justify-center text-center text-white {$page.data.path.includes(
			'apps'
		)
			? ''
			: 'hidden'}"
	>
		<p class="text-xl text-center text-gray-300 md:text-gray-200 font-extralight">
			<button class="p-6 m-6 hover:opacity-85"
				><a
					href="https://rangerideroregon.com/wp-content/uploads/2023/11/RRMenuFall2023_1-scaled.jpg"
					target="_blank">Photo menu</a
				>
			</button>
			&nbsp&nbsp|&nbsp&nbsp
			<button class="p-6 m-6 hover:opacity-85">
				<a
					href="https://rangerideroregon.com/wp-content/uploads/2023/11/RRMenuFall2023.pdf"
					target="_blank">PDF menu</a
				>
			</button>
		</p>
	</footer>
</div>
