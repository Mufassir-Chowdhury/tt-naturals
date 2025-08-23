<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	const { data } = $props();
	
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Category Header -->
	<div class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-foreground mb-4">All Products</h1>
		<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
			From premium teas to traditional pickles, discover our carefully curated selection of natural
			products for your healthy lifestyle.
		</p>
	</div>

	<!-- Products -->
	<ProductCard products={data.products} />
</div>
