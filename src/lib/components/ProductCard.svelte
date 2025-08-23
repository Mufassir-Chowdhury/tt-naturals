<script lang="ts">
	import { ShoppingCart, Star } from '@lucide/svelte';

	const { products } = $props();
	const discountPercentage = (product: any) => {
		return product.compare_price
			? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
			: 0;
	};

	function onAddToCart(product: any) {
		throw new Error('Function not implemented.');
	}
</script>

<section>
	<div class="flex items-center justify-between mb-8">
		<h2 class="text-2xl font-semibold text-foreground">Products</h2>
		<span class="text-muted-foreground">{products.length} products</span>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
		{#each products as product}
			<div
				class="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm"
			>
				<div class="p-0">
					<div class="relative aspect-square overflow-hidden">
						<a href={`/products/${product.slug}`}>
							<img
								src={product.image_url || '/placeholder.svg?height=300&width=300'}
								alt={product.name}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</a>

						<!-- Badges -->
						<div class="absolute top-3 left-3 flex flex-col gap-2">
							{#if product.featured}
								<div
									class="border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
								>
									Featured
								</div>
							{/if}
							{#if discountPercentage(product) > 0}
								<div
									class="border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
								>
									{discountPercentage(product)}% OFF
								</div>
							{/if}
						</div>

						<!-- Quick add to cart -->
						<div
							class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
						>
							<button
								class="text-primary-foreground size-9 rounded-full shadow-lg bg-primary hover:bg-primary/90"
								onclick={() => onAddToCart?.(product)}
							>
								<ShoppingCart class="h-4 w-4" />
							</button>
						</div>
					</div>

					<div class="p-5 space-y-3">
						<div class="space-y-2">
							<a href={`/products/${product.slug}`}>
								<h3
									class="font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-lg"
								>
									{product.name}
								</h3>
							</a>
							<p class="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
								{product.short_description}
							</p>
						</div>

						<!-- Rating placeholder -->
						<div class="flex items-center gap-1">
							{#each Array(5) as _, i}
								<Star class="h-4 w-4 fill-primary text-primary" />
							{/each}

							<span class="text-sm text-muted-foreground ml-2">(4.8)</span>
						</div>

						<div class="flex items-center justify-between pt-2">
							<div class="space-y-1">
								<div class="flex items-center gap-2">
									<span class="text-xl font-bold text-foreground font-serif"
										>৳{product.price.toFixed(2)}</span
									>
									{#if product.compare_price && product.compare_price > product.price}
										<span class="text-sm text-muted-foreground line-through">
											৳{product.compare_price.toFixed(2)}
										</span>
									{/if}
								</div>
								<span class="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
									>{product.weight}g</span
								>
							</div>

							<button
								onclick={() => onAddToCart?.(product)}
								class="text-primary-foreground h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 shrink-0 bg-primary hover:bg-primary/90 shadow-md"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
