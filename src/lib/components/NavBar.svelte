<script lang="ts">
    import { page } from '$app/stores';
    import OpenSign from './OpenSign.svelte';
    
    let isOpen: boolean = $state($page.data.isOpen);
    let isMobile: boolean = $state(false);
	
    if (typeof window !== 'undefined') {
        const userAgent = navigator.userAgent;
        isMobile = /android|iphone|ipad|ipod/i.test(userAgent);
    }
</script>

<nav
    class="container relative z-10 flex-col-reverse items-center justify-center hidden min-h-screen mx-auto overflow-hidden text-2xl font-thin text-gray-200 md:min-h-fit md:justify-between md:flex-row md:flex"
    aria-label="Main navigation"
    id="main_navbar"
>
    <!-- Open sign -->
    <OpenSign bind:isOpen />
    
    <!-- Music -->
    <a
        href="/music"
        class="p-6 m-6 hover:opacity-85 {$page.data?.path?.includes('Music') ? 'border-b' : ''}"
        aria-label="Music"
    >
        Music
    </a>
    
    <!-- Phone number: clickable link on mobile, plain text on desktop -->
    <div aria-label="Call Range Rider at 541-426-2337">
        {#if isMobile}
            <a 
                href="tel:541-426-2337"
                class="p-6 m-6 hover:opacity-85"
            >
                (541) 426-2337
            </a>
        {:else}
            <span class="p-6 m-6">(541) 426-2337</span>
        {/if}
    </div>
    
    <!-- Menu -->
    <a
        href="/menu"
        class="p-6 m-6 hover:opacity-85 {$page.data?.path?.includes('Menu') ? 'border-b' : ''}"
        aria-label="Menu"
    >
        Menu
    </a>
    
    <!-- Order now! -->
    <a
        href="https://www.toasttab.com/range-rider-107-northwest-1st-street/v3"
        class="p-6 m-6 border-red-500 border rounded-sm hover:opacity-85 {isOpen ? '' : 'hidden'}"
        aria-hidden={!isOpen}
        aria-label="Order now!"
    >
        Order now!
    </a>
    
    <!-- Hours when closed -->
    <div class="flex flex-col space-y-2 {isOpen ? 'hidden' : ''}">
        <p class="text-xs text-center text-gray-200 font-extralight">11 am to 10 pm</p>
        <p class="text-xs text-center text-gray-200 font-extralight">Closed Sundays</p>
    </div>
</nav>