<script>
    import HeroSection from '$lib/components/HeroSection.svelte';
    import FeaturedProducts from '$lib/components/FeaturedProducts.svelte';
    import FeaturedContent from '$lib/components/FeaturedContent.svelte';

    const { data } = $props();
</script>

<main class="flex-1">
    <HeroSection/>
    <FeaturedProducts products={data.products}/>
    <FeaturedContent content={data.content}/>
</main>

