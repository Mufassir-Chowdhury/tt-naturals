<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { ArrowRight } from '@lucide/svelte';

	const { products } = $props()
</script>

<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4 space-y-8">
		<div class="text-center space-y-4 mb-12">
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground">Explore Our Products</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				From premium teas to traditional pickles, discover our carefully curated selection of
				natural products for your healthy lifestyle.
			</p>
		</div>

		<ProductCard products={products} />

		<div class="text-center">
			<button
				class="h-10 rounded-md px-6 has-[>svg]:px-4 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
			>
				<a href="/products" class="flex items-center">
					View All Products
					<ArrowRight class="ml-2 h-4 w-4" />
				</a>
			</button>
		</div>
	</div>
</section>
