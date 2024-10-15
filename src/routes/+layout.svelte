<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { children } = $props();
</script>

<div class="relative z-0 min-h-screen overflow-hidden bg-[#0a0a0a]">
	<enhanced:img
		src="/static/range_rider_night.jpg"
		alt=""
		class="fixed -z-10 -top-12 object-contain md:inset-0 md:w-full md:h-full {$page.data?.isOpen &&
		!($page.data?.path?.includes('Music') ?? false) &&
		!($page.data?.path?.includes('Menu') ?? false)
			? 'saturate-100'
			: 'saturate-0'}
		{$page.error ? 'hidden' : 'saturate-0'}"
	/>

	<NavBar />

	<div class="relative flex flex-col w-full h-full overflow-hidden text-gray-200">
		{@render children()}
	</div>

	<Footer />
</div>
