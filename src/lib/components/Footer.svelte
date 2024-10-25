<script lang="ts">
	import { page } from '$app/stores';
</script>

<footer
	class="fixed bottom-0 left-0 right-0 z-10 flex-col justify-center mb-4 text-center text-white {$page.data?.path?.includes(
		'Menu'
	)
		? 'hidden'
		: ''}"
>

	<!-- Address or booking email -->
	<p class="pb-2 text-xl text-center text-gray-300 -translate-y-12 md:text-gray-200 font-extralight">
		{#if $page.data?.path != 'Music'}
			<a
				href="https://www.google.com/maps/dir//107%20NW%201st%20St,%20Enterprise,%20Oregon%2097828"
				target="_blank"
				class="hidden hover:opacity-85 md:block">107 NW 1st St, Enterprise, Oregon 97828</a
			>
		{:else}
			Booking: rangeridermusic@gmail.com
		{/if}
	</p>

	<!-- Hours when closed -->
	<div class="absolute inset-x-0 bottom-0 {$page.data?.path?.includes('Music') ? 'hidden' : ''}">
		<div class="flex flex-col space-y-2 md:hidden">
			<p class="text-xs text-center text-gray-200 font-extralight">11 am to 10 pm</p>
			<p class="text-xs text-center text-gray-200 font-extralight">Closed Sundays</p>
		</div>
	</div>

	<!-- Social media icons -->
	<div
		class="flex items-center justify-between space-x-4 md:justify-center {$page.data?.path?.includes(
			'Music'
		)
			? 'hidden'
			: ''}"
	>
    
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
