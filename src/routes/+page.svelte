<script lang="ts">
	import OpenSign from '$lib/components/OpenSign.svelte';
	import { checkIfOpen } from '$lib/checkIfOpen';

	let isOpen: boolean = $state(checkIfOpen());

	let isMobile: boolean = $state(false);
	if (typeof window !== 'undefined') {
		const userAgent = navigator.userAgent;
		isMobile = /android|iphone|ipad|ipod/i.test(userAgent);
		console.log({ userAgent });
	}

	// setTimeout(() => {
	// 	isOpen = !isOpen;
	// }, 3000);
</script>

<div class="absolute flex items-center justify-around w-full text-gray-200"></div>
<nav
	class="container relative z-10 flex flex-col items-center justify-center min-h-screen p-4 mx-auto text-2xl font-thin text-gray-200 bg-black/50 md:min-h-fit md:justify-between md:flex-row md:hidden"
	aria-label="Main navigation"
>	<div class="absolute top-0 right-0 m-7"><OpenSign bind:isOpen /></div>

	<!-- Order now! -->
	<button
		class="p-6 m-6 border-red-500 border rounded-sm hover:opacity-85 {isOpen ? '' : 'hidden'}"
		aria-hidden={!isOpen}
		><a href="https://www.toasttab.com/range-rider-107-northwest-1st-street/v3">Order now!</a
		></button
	><!-- Menu -->
	<button class="p-6 m-6 hover:opacity-85"><a href="/menu" aria-label="Menu">Menu</a></button>
	<!-- Music -->
	<button class="p-6 m-6 hover:opacity-85"><a href="/music" aria-label="Music">Music</a></button>
	<!-- Phone number: clickable link on mobile, plain text on desktop -->
	<div class="m-11">
		{#if isMobile}
			<a href="tel:541-426-2337" class="text-xl" aria-label="Call Range Rider at 541-426-2337"
				>(541) 426-2337</a
			>
		{:else}
			<span>(541) 426-2337</span>
		{/if}
	</div>
	<!-- Contact -->
</nav>
