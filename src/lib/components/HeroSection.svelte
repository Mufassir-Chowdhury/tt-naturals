<script>
	import { ArrowRight, Leaf, Heart, Shield } from '@lucide/svelte';
</script>

<section
	class="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 bengali-pattern"
>
	<div class="container mx-auto px-4 py-20 lg:py-28">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<!-- Content -->
			<div class="space-y-10">
				<div class="space-y-6">
					<h1 class="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
						Pure Nature,
						<span
							class="text-primary block bg-gradient-to-r from-primary to-secondary bg-clip-text"
						>
							Authentic Taste
						</span>
					</h1>
					<p class="text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
						Discover premium teas, natural oils, traditional pickles, and authentic dry fish.
						Sourced directly from the Bengal region, crafted with care for your wellness journey.
					</p>
				</div>

				<div class="flex flex-col sm:flex-row gap-4">
					<button
						class="rounded-md has-[>svg]:px-4 text-lg px-10 py-3 hover:bg-primary/90 shadow-lg bg-primary text-primary-foreground"
					>
						<a href="/products" class="flex items-center">
							Shop Now
							<ArrowRight class="ml-2 h-5 w-5" />
						</a>
					</button>
					<button
						class="shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md has-[>svg]:px-4 text-lg px-10 py-3 border-2 border-primary/20 hover:bg-primary/5 bg-transparent"
					>
						<a href="/about">Learn More</a>
					</button>
				</div>

				<!-- Features -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
					<div class="flex items-center space-x-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20"
						>
							<Leaf class="h-6 w-6 text-primary" />
						</div>
						<div>
							<p class="font-serif font-semibold text-foreground text-lg">100% Natural</p>
							<p class="text-sm text-muted-foreground">No artificial additives</p>
						</div>
					</div>
					<div class="flex items-center space-x-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20"
						>
							<Heart class="h-6 w-6 text-accent" />
						</div>
						<div>
							<p class="font-serif font-semibold text-foreground text-lg">Health First</p>
							<p class="text-sm text-muted-foreground">Wellness focused</p>
						</div>
					</div>
					<div class="flex items-center space-x-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 border border-secondary/20"
						>
							<Shield class="h-6 w-6 text-secondary" />
						</div>
						<div>
							<p class="font-serif font-semibold text-foreground text-lg">Quality Assured</p>
							<p class="text-sm text-muted-foreground">Premium sourcing</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Hero Image -->
			<div class="relative">
				<div
					class="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-border/50 shadow-2xl"
				>
					<img
						src="/tea-and-spices.png"
						alt="Natural tea leaves and spices from Bengal"
						class="w-full h-full object-cover"
					/>
				</div>
				<div
					class="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-border/50"
				>
					<Leaf class="h-10 w-10 text-primary" />
				</div>
				<div
					class="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-border/50"
				>
					<Heart class="h-10 w-10 text-accent" />
				</div>
			</div>
		</div>
	</div>
</section>
