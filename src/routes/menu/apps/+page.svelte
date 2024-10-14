<script lang="ts">
	const appetizers: Array<{name: string; price: string}>= [
    { name: "Onion Rings", price: "$10.50" },
    { name: "French Fries", price: "$6.00" },
    { name: "Poppers", price: "$9.00" },
    { name: "Sweet Potato Fries", price: "$9.00" },
    { name: "Fried Pickles", price: "$8.00" },
    { name: "Sidewinders", price: "$6.00" },
    { name: "Chicken Wings (per wing)", price: "Sweet & Spicy or BBQ $2.50" },
    { name: "Appetizer Sampler", price: "$14.00" },
    { name: "Sauces: Ranch, Jalapeno Ranch, Fry Sauce, Tartar, BBQ", price: "$0.75" },
    { name: "Sweet & Sour Aioli, Mae Ploy", price: "$1.25" },
    { name: "Blue Cheese Dressing & Al", price: "$1.75" },
	
	{ name: "Onion Rings", price: "$10.50" },
    { name: "French Fries", price: "$6.00" },
    { name: "Poppers", price: "$9.00" },
    { name: "Sweet Potato Fries", price: "$9.00" },
    { name: "Fried Pickles", price: "$8.00" },
    { name: "Sidewinders", price: "$6.00" },
    { name: "Chicken Wings (per wing)", price: "Sweet & Spicy or BBQ $2.50" },
    { name: "Appetizer Sampler", price: "$14.00" },
    { name: "Sauces: Ranch, Jalapeno Ranch, Fry Sauce, Tartar, BBQ", price: "$0.75" },
    { name: "Sweet & Sour Aioli, Mae Ploy", price: "$1.25" },
    { name: "Blue Cheese Dressing & Al", price: "$1.75" }
	
];
</script>

<div class="flex justify-center w-full overflow-scroll md:mb-36">
	<div class="grid w-2/3 grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each appetizers as item}
				<div class="p-3">
					<h2 class="text-2xl font-semibold text-gray-300">{item.name}</h2>
					<p class="mx-3 mt-2 text-gray-500">{item.price}</p>
				</div>
		{/each}
	</div>
</div>

