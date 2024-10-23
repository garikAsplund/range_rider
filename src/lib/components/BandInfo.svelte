<script lang="ts">
	import { bands } from '$lib/bands';

	function getStructuredData(bands) {
		return JSON.stringify(
			bands.map((band) => ({
				'@context': 'https://schema.org',
				'@type': 'Event',
				name: band.name,
				startDate: band.isoDate,
				location: {
					'@type': 'Place',
					name: 'The Range Rider',
					address: {
						'@type': 'PostalAddress',
						streetAddress: '107 NW 1st St',
						addressLocality: 'Enterprise',
						addressRegion: 'Oregon',
						postalCode: '97828',
						addressCountry: 'US'
					}
				},
				performer: {
					'@type': 'MusicGroup',
					name: band.name
				},
				url: band.link
			}))
		);
	}

	const structuredData = getStructuredData(bands);
</script>

<svelte:head>
	{@html '<script type="application/ld+json">' + structuredData + '</script>'}

</svelte:head>

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
