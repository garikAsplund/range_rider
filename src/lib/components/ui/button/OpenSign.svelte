<script lang="ts">
	export let isOpen: boolean;
</script>

<div class="flex-col items-center justify-center space-y-1.5">
	<p class="text-xs text-center text-gray-200 font-extralight hidden md:flex {isOpen ? '' : 'invisible'}">11 am to 10 pm</p>
	<div class="flex items-center justify-center gap-2">
		<div
			class={`
        h-3 w-3 
        rounded-full
        ${
					isOpen
						? 'bg-green-500 shadow-sm shadow-green-400/70'
						: 'bg-red-500 shadow-lg shadow-red-500/50'
				}
        transition-all duration-300
      `}
		></div>
		<span class="text-lg text-gray-200 uppercase">{isOpen ? 'Open' : 'Closed'}</span>
	</div>
	<p class="text-xs text-center text-gray-200 font-extralight hidden md:flex {isOpen ? '' : 'invisible'}">Closed Sundays</p>
</div>
