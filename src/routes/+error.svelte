<script>
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center w-full h-full mt-24">
	
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
