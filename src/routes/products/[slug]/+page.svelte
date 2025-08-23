<script>
	import { ShoppingCart, Star, Truck, Shield, Leaf } from '@lucide/svelte';

	const product = {
		id: '1',
		name: 'Premium Teas',
		slug: 'premium-teas',
		description: 'Handpicked teas from the finest gardens',
		image_url: '/premium-tea-leaves.png',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		price: 499.99,
		compare_price: 599.99,
		short_description:
			'Experience the rich flavors of our premium teas sourced from the best gardens.',
		weight: 250,
		featured: true,
		ingredients: ['Green Tea Leaves', 'Natural Flavors'],
		benefits: ['Rich in Antioxidants', 'Boosts Metabolism', 'Supports Heart Health'],
		usage_instructions:
			'Steep 1 teaspoon of tea leaves in hot water for 3-5 minutes. Enjoy hot or iced.'
	};

	const discountPercentage = product.compare_price
		? Math.round(((product.compare_price - product.price) / product.compare_price) * 100)
		: 0;
</script>

<div class="mx-auto px-4 py-8">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
		<!-- Product Images -->
		<div class="space-y-4">
			<div class="aspect-square rounded-lg overflow-hidden bg-muted">
				<img
					src={product.image_url || '/placeholder.svg?height=600&width=600'}
					alt={product.name}
					class="w-full h-full object-cover"
				/>
			</div>
		</div>

		<!-- Product Info -->
		<div class="space-y-6">
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					{#if product.featured}
						<div
							class="border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
						>
							Featured
						</div>
					{/if}
					{#if discountPercentage > 0}
                        <div class="border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden">
                            {discountPercentage}% OFF
                        </div>
					{/if}
				</div>

				<h1 class="text-3xl font-bold text-foreground">{product.name}</h1>
				<p class="text-lg text-muted-foreground">{product.short_description}</p>

				<!-- Rating -->
				<div class="flex items-center gap-2">
					<div class="flex items-center">
						{#each Array(5) as _, i}
							<Star class="h-5 w-5 fill-primary text-primary" />
						{/each}
					</div>
					<span class="text-sm text-muted-foreground">(4.8) • 24 reviews</span>
				</div>

				<!-- Price -->
				<div class="space-y-2">
					<div class="flex items-center gap-3">
						<span class="text-3xl font-bold text-foreground">৳{product.price.toFixed(2)}</span>
						{#if product.compare_price && product.compare_price > product.price}
							<span class="text-xl text-muted-foreground line-through">
								৳{product.compare_price.toFixed(2)}
							</span>
						{/if}
					</div>
					<p class="text-sm text-muted-foreground">Weight: {product.weight}g</p>
				</div>
			</div>

			<!-- Add to Cart -->
			<div class="space-y-4">
				<button class="w-full flex flex-row justify-center items-center py-3 text-lg rounded-md has-[>svg]:px-4 px-10 hover:bg-primary/90 shadow-lg bg-primary text-primary-foreground">
                    <ShoppingCart class="mr-2 h-5 w-5" />
                    Add to Cart
                </button>

				<div class="grid grid-cols-3 gap-4 text-center">
					<div class="flex flex-col items-center space-y-1">
						<Truck class="h-5 w-5 text-primary" />
						<span class="text-xs text-muted-foreground">Free Shipping</span>
					</div>
					<div class="flex flex-col items-center space-y-1">
						<Shield class="h-5 w-5 text-primary" />
						<span class="text-xs text-muted-foreground">Quality Assured</span>
					</div>
					<div class="flex flex-col items-center space-y-1">
						<Leaf class="h-5 w-5 text-primary" />
						<span class="text-xs text-muted-foreground">100% Natural</span>
					</div>
				</div>
			</div>

			<!-- Product Details -->
			<div
				class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
			>
				<div class="p-6 space-y-4">
					<div>
						<h3 class="font-semibold text-foreground mb-2">Description</h3>
						<p class="text-muted-foreground">{product.description}</p>
					</div>
					{#if product.ingredients && product.ingredients.length > 0}
						<div>
							<h3 class="font-semibold text-foreground mb-2">Ingredients</h3>
							<div class="flex flex-wrap gap-2">
								{#each product.ingredients as ingredient, index}
                                     <div class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground">
                                         {ingredient}
                                     </div>
								{/each}
							</div>
						</div>
					{/if}
					{#if product.benefits && product.benefits.length > 0}
						<div>
							<h3 class="font-semibold text-foreground mb-2">Benefits</h3>
							<ul class="space-y-1">
								{#each product.benefits as benefit, index}
									<li class="text-muted-foreground flex items-center">
										<span class="w-2 h-2 bg-primary rounded-full mr-2 shrink-0"></span>
										{benefit}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					{#if product.usage_instructions}
						<div>
							<h3 class="font-semibold text-foreground mb-2">Usage Instructions</h3>
							<p class="text-muted-foreground">{product.usage_instructions}</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
