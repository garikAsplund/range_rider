<script lang="ts">
    export let section;
</script>

<div class="flex justify-center w-full overflow-scroll">
	<div class="grid w-2/3 h-full grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each section as item}
				<div class="p-3">
					<h2 class="text-2xl font-semibold text-gray-300">{item.name}</h2>
					<p class="mx-3 mt-2 text-gray-500">{item.price}</p>
				</div>
		{/each}
	</div>
</div>