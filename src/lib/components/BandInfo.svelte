<script lang="ts">
	import { bands } from '$lib/bands';
</script>

<div class="flex flex-col items-center justify-center w-full max-w-md px-4 md:-translate-y-12">
    {#each bands as band}
      <div class="flex flex-col w-full space-y-2 text-center">
        <div class="text-xl font-thin">{band.date}</div>
        <a href={band.link} class="text-lg hover:text-gray-300" target="_blank" rel="noopener">
          {band.name}
        </a>
        <div class="font-thin text-normal">{band.time}</div>
      </div>
      {#if band !== bands[bands.length - 1]}
        <hr class="w-2/3 my-4 border-t border-gray-500" />
      {/if}
    {/each}
  </div>