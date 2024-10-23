<script lang="ts">
    import { page } from "$app/stores";
</script>

<nav
    class="absolute hidden w-full px-6 m-12 font-thin lg:w-2/3 xl:w-3/5 top-2 md:items-center md:justify-between md:flex-row md:flex md:text-xl"
>
    <a
        href="/menu/apps"
        aria-label="Appetizers"
        class="p-6 hover:opacity-85 {$page.data.path.includes('apps') ? 'border-b' : ''}"
    >
        Appetizers
    </a>
    
    <a
        href="/menu/entrees"
        aria-label="Entrees"
        class="p-6 hover:opacity-85 {$page.data.path.includes('entrees') ? 'border-b' : ''}"
    >
        Entrees
    </a>
    
    <a
        href="/menu/burgers"
        aria-label="Burgers"
        class="p-6 hover:opacity-85 {$page.data.path.includes('burgers') ? 'border-b' : ''}"
    >
        Burgers
    </a>
    
    <a
        href="/menu/sandwiches"
        aria-label="Sandwiches"
        class="p-6 hover:opacity-85 {$page.data.path.includes('sandwiches') ? 'border-b' : ''}"
    >
        Sandwiches
    </a>
    
    <a
        href="/menu/kids"
        aria-label="Kids"
        class="p-6 hover:opacity-85 {$page.data.path.includes('kids') ? 'border-b' : ''}"
    >
        Kids'
    </a>
    
    <a
        href="/menu/dessert"
        aria-label="Dessert"
        class="p-6 hover:opacity-85 {$page.data.path.includes('dessert') ? 'border-b' : ''}"
    >
        Dessert
    </a>
</nav>