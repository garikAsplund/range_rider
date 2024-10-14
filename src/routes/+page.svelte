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
	class="container relative z-10 flex flex-col items-center justify-center min-h-screen p-4 mx-auto text-2xl font-thin text-gray-200 bg-black/70 md:hidden"
	aria-label="Main navigation on mobile devices"
>
	<!-- Open sign -->
	<div class="absolute top-0 right-0 m-7">
		<OpenSign bind:isOpen />
	</div>

	<!-- Music -->
	<button class="p-6 hover:opacity-85"><a href="/music" aria-label="Music">Music</a></button>

	<!-- Menu -->
	<button class="p-6 hover:opacity-85"><a href="/menu" aria-label="Menu">Menu</a></button>

	<!-- Order now! -->
	<button
		class="p-6 border-red-500 border rounded-sm hover:opacity-85 {isOpen ? '' : 'hidden'}"
		aria-hidden={!isOpen}
		><a href="https://www.toasttab.com/range-rider-107-northwest-1st-street/v3">Order now!</a
		></button
	>
	<!-- Directions -->
	<button class="p-6 hover:opacity-85 md:hidden"
		><a
			href="https://www.google.com/maps/dir//107%20NW%201st%20St,%20Enterprise,%20Oregon%2097828"
			target="_blank">Directions</a
		></button
	>

	<!-- Phone number: clickable link on mobile, plain text on desktop -->
	<div class="p-6">
		{#if isMobile}
			<a href="tel:541-426-2337" class="text-xl" aria-label="Call Range Rider at 541-426-2337"
				>(541) 426-2337</a
			>
		{:else}
			<span aria-label="Call Range Rider at 541-426-2337">(541) 426-2337</span>
		{/if}
	</div>

	<!-- Hours when closed -->
	 <div class="absolute inset-x-0 bottom-0 m-7">
	<div class="flex flex-col space-y-2 md:hidden">
		<p class="text-xs text-center text-gray-200 font-extralight">11 am to 10 pm</p>
		<p class="text-xs text-center text-gray-200 font-extralight">Closed Sundays</p>
	</div></div>
</nav>
