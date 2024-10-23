<script>
	import { page } from '$app/stores';
	import HomeButton from '$lib/components/HomeButton.svelte';
</script>

<div class="flex items-center justify-center w-full h-full mt-24">
	
	<HomeButton />

	{#if $page.status === 404}
		<img
			src="https://i.redd.it/6w8jl1yr42851.jpg"
			alt="Page not found :("
			title="Page not found :("
		/>
	{:else if $page.status === 500}
		<img src="https://http.cat/images/500.jpg" alt="Oh noooo" title="No way" />
	{:else}
		<h1 class="text-center">{$page.status} {$page.error?.message}</h1>
	{/if}
</div>
