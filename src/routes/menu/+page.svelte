<script>
	import MobileMenuNav from '$lib/components/MobileMenuNav.svelte';
	import { appetizers, sauces, soupAndSalad, saladAddOns, entrees, burgers, sandwiches, kids, dessert } from '$lib/menu';

	const menuItems = [
    ...appetizers,
    ...sauces,
    ...soupAndSalad,
    ...saladAddOns,
    ...entrees,
    ...burgers,
    ...sandwiches,
    ...kids,
    ...dessert
];

const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "The Range Rider Menu",
    "hasMenuItem": menuItems.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.description || "",
        "offers": {
            "@type": "Offer",
            "price": item.price.replace(/^\$/, ''), // Remove the dollar sign for numeric representation
            "priceCurrency": "USD"
        }
    }))}, null, 2)
;
</script>

<svelte:head>
	{@html '<script type="application/ld+json">' + structuredData + '</script>'}
</svelte:head>

<!-- Specials button (on desktop) -->
<a
	href="menu/specials"
	class="items-center justify-center hidden w-full p-6 m-6 text-3xl font-thin text-center md:flex hover:text-gray-300"
	aria-label="See our specials"
>
	See our specials
</a>

<MobileMenuNav />
