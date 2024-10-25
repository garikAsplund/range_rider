<script lang="ts">
	import { page } from '$app/stores';
	import BackButton from './BackButton.svelte';
</script>

<div
	class="fixed z-20 bottom-0 h-20 left-0 right-0 flex items-center justify-between w-full p-4  md:hidden {$page
		.url.pathname !== '/'
		? ''
		: 'hidden'}"
>
	<button
		on:click={() => history.back()}
		class="p-3 transition-colors rounded-full bg-black/40 hover:bg-black/60"
		aria-label="Go back"
	>
		<BackButton />
	</button>

	<a
		href="/"
		class="p-3 transition-colors rounded-full bg-black/40 hover:bg-black/60"
		aria-label="Home"
	>
		<!-- Your existing home SVG -->
		<svg fill="white" height="24" role="img" viewBox="0 0 24 24" width="24">
			<path
				d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
			></path>
		</svg>
	</a>
</div>
