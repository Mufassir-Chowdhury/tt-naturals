<script>
    import HeroSection from '$lib/components/HeroSection.svelte';
    import FeaturedProducts from '$lib/components/FeaturedProducts.svelte';
    import FeaturedContent from '$lib/components/FeaturedContent.svelte';

    const { data } = $props();
    let current = $state(0);
	const total = data.testimonials.length;

	const next = () => current = (current + 1) % total;
	const prev = () => current = (current - 1 + total) % total;

	import { onMount, onDestroy } from 'svelte';
	onMount(() => { setInterval(next, 5000); });
</script>

<main class="flex-1">
    <HeroSection/>
    <FeaturedProducts products={data.products}/>
    <FeaturedContent content={data.content}/>
    
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-5xl mx-auto px-4 text-center relative overflow-hidden">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-12">What People Say</h2>

            <div class="relative w-full">
                <div
                    class="flex transition-transform duration-700 ease-in-out"
                    style="transform: translateX(-{current * 100}%)"
                >
                    {#each data.testimonials as t (t.id)}
                        <div class="min-w-full px-6">
                            <div class="bg-white rounded-3xl shadow-lg hover:shadow-xl border border-gray-100 p-8 flex flex-col items-center justify-between text-center h-full">
                                <div class="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                                    {t.name.charAt(0)}
                                </div>
                                <p class="text-gray-700 italic leading-relaxed mb-6">"{t.review}"</p>
                                <h3 class="text-gray-900 font-semibold text-lg">{t.name}</h3>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Navigation -->
                <div class="absolute inset-0 flex justify-between items-center px-2">
                    <button on:click={prev} class="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-gray-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button on:click={next} class="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-gray-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <!-- Pagination dots -->
                <div class="flex justify-center mt-8 space-x-2">
                    {#each data.testimonials as _, i}
                        <div
                            class="w-3 h-3 rounded-full cursor-pointer transition"
                            class:bg-teal-500={i === current}
                            class:bg-gray-300={i !== current}
                            on:click={() => current = i}
                        ></div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
    
</main>

