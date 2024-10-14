<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import OpenSign from '$lib/components/OpenSign.svelte';
	import { checkIfOpen } from '$lib/checkIfOpen';

	let { children } = $props();

	let isOpen: boolean = $state(checkIfOpen());
	// Detect if user is on a mobile device
	let isMobile: boolean = $state(false);
	if (typeof window !== 'undefined') {
		const userAgent = navigator.userAgent;
		isMobile = /android|iphone|ipad|ipod/i.test(userAgent);
	}

	// setTimeout(() => {
	// 	isOpen = !isOpen;
	// }, 3000);
</script>

<div class="relative z-0 min-h-screen overflow-hidden bg-[#0a0a0a]">
	<enhanced:img
		src="/static/range_rider_night.jpg"
		alt=""
		class="fixed -z-10 -top-12 object-contain md:inset-0 md:w-full md:h-full {isOpen &&
		!$page.data.path.includes('Music') &&
		isOpen &&
		!$page.data.path.includes('Menu')
			? 'saturate-100'
			: 'saturate-0'}"
	/>

	<!-- Content -->
	<nav
		class="container relative z-10 flex-col-reverse items-center justify-center hidden min-h-screen mx-auto overflow-hidden text-2xl font-thin text-gray-200 md:min-h-fit md:justify-between md:flex-row md:flex"
		aria-label="Main navigation"
		id="main_navbar"
	>
		<!-- Open sign -->
		<OpenSign bind:isOpen />

		<!-- Music -->
		<button class="p-6 m-6 hover:opacity-85"
			><a href="/music" class={$page.data.path.includes('Music') ? 'border-b' : ''} aria-label="Music">Music</a
			></button
		>

		<!-- Phone number: clickable link on mobile, plain text on desktop -->
		<div aria-label="Call Range Rider at 541-426-2337">
			{#if isMobile}
				<a href="tel:541-426-2337" >(541) 426-2337</a>
			{:else}
				<span>(541) 426-2337</span>
			{/if}
		</div>

		<!-- Menu -->
		<button class="p-6 m-6 hover:opacity-85"
			><a href="/menu" class={$page.data.path.includes('Menu') ? 'border-b' : ''} aria-label="Menu">Menu</a></button
		>

		<!-- Order now! -->
		<button
			class="p-6 m-6 border-red-500 border rounded-sm hover:opacity-85 {isOpen ? '' : 'hidden'}"
			aria-hidden={!isOpen}
			aria-label="Order now!"
			><a href="https://www.toasttab.com/range-rider-107-northwest-1st-street/v3">Order now!</a
			></button
		>

		<!-- Hours when closed -->
		<div class="flex flex-col space-y-2 {isOpen ? 'hidden' : ''}">
			<p class="text-xs text-center text-gray-200 font-extralight">11 am to 10 pm</p>
			<p class="text-xs text-center text-gray-200 font-extralight">Closed Sundays</p>
		</div>
	</nav>

	<!-- <slot /> -->
	<div
		class="relative flex flex-col w-full overflow-hidden text-gray-200"
	>
		{@render children()}
	</div>

	<!-- Footer -->
	<footer
		class="fixed bottom-0 left-0 right-0 z-10 flex-col justify-center mb-4 text-center text-white {$page.data.path.includes('Menu') ? 'hidden' : ''}"
	>
		<p
			class="pb-2 text-xl text-center text-gray-300 -translate-y-7 md:text-gray-200 font-extralight"
		>
			{#if $page.data.path != 'Music'}
				<a
					href="https://www.google.com/maps/dir//107%20NW%201st%20St,%20Enterprise,%20Oregon%2097828"
					target="_blank"
					class="hover:opacity-85">107 NW 1st St, Enterprise, Oregon 97828</a
				>
			{:else}
				Booking: rangeridermusic@gmail.com
			{/if}
		</p>
		<div class="flex items-center justify-between space-x-4 md:justify-center">
			<!-- Facebook -->
			<a
				href="https://www.facebook.com/rangerideroregon/"
				target="_blank"
				class="p-4 opacity-85 md:p-1 hover:opacity-65"
			>
				<svg
					aria-label="Range Rider on Facebook"
					fill="currentColor"
					height="24"
					role="img"
					viewBox="0 0 24 24"
					width="24"
					><title>Range Rider on Facebook</title><circle
						cx="12"
						cy="12"
						fill="none"
						r="11.25"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
					></circle><path
						d="M16.671 15.469 17.203 12h-3.328V9.749a1.734 1.734 0 0 1 1.956-1.874h1.513V4.922a18.452 18.452 0 0 0-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v7.885a12.125 12.125 0 0 0 3.75 0V15.47Z"
						fill-rule="evenodd"
					></path></svg
				></a
			>

			<!-- Hours when closed -->
			<div class="flex flex-col space-y-2 md:hidden">
				<p class="text-xs text-center text-gray-200 font-extralight">11 am to 10 pm</p>
				<p class="text-xs text-center text-gray-200 font-extralight">Closed Sundays</p>
			</div>

			<!-- Instagram -->
			<a
				href="https://www.instagram.com/therangerideroregon"
				target="_blank"
				class="p-4 md:p-1 hover:opacity-65 opacity-85"
			>
				<svg
					aria-label="Range Rider on Instagram"
					fill="currentColor"
					height="24"
					role="img"
					viewBox="0 0 24 24"
					width="24"
					><title>Range Rider on Instagram</title><path
						d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"
					></path></svg
				></a
			>
		</div>
	</footer>
</div>
