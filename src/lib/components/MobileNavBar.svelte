<script lang="ts">
	import OpenSign from '$lib/components/OpenSign.svelte';
	import { page } from '$app/stores';

	let isOpen: boolean = $state($page.data.isOpen);

	let isMobile: boolean = $state(false);
	if (typeof window !== 'undefined') {
		const userAgent = navigator.userAgent;
		isMobile = /android|iphone|ipad|ipod/i.test(userAgent);
	}
</script>

<nav
	class="container relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 mx-auto text-2xl font-thin text-gray-200 bg-black/70 md:hidden"
	aria-label="Main navigation on mobile devices"
>
	<!-- Open sign -->
	<div class="absolute top-0 right-0 m-7">
		<OpenSign bind:isOpen />
	</div>

	<!-- Music -->
	<a href="/music" aria-label="Music" class="block w-full p-6 text-center hover:opacity-85">
		Music
	</a>

	<!-- Menu -->
	<a href="/menu" aria-label="Menu" class="block w-full p-6 text-center hover:opacity-85">Menu</a>

	<a
		href="https://www.toasttab.com/range-rider-107-northwest-1st-street/v3"
		class=" w-full flex justify-center hover:opacity-85 {isOpen ? '' : 'hidden'}"
		aria-hidden={!isOpen}
	>
		<div class="p-6 text-center border border-red-500 rounded-sm w-fit">Order now!</div>
	</a>

	<!-- Directions -->
	<a
		href="https://www.google.com/maps/dir//107%20NW%201st%20St,%20Enterprise,%20Oregon%2097828"
		target="_blank"
		class="block w-full p-6 text-center hover:opacity-85 md:hidden"
	>
		Directions
	</a>

	<!-- Phone number: clickable link on mobile, plain text on desktop -->
	<a
		href={isMobile ? 'tel:541-426-2337' : '#'}
		class="block w-full p-6 text-center hover:opacity-85"
		aria-label="Call Range Rider at 541-426-2337"
	>
		<div class="text-xl">(541) 426-2337</div>
	</a>
</nav>
