<script lang="ts">
	import { page } from '$app/stores';
</script>

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
