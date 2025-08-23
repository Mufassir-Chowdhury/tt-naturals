<script>
	import ContentCard from '$lib/components/ContentCard.svelte';
	import { ArrowRight } from '@lucide/svelte';

	const { content } = $props();
</script>

<section class="py-16 lg:py-24 bg-muted/30">
	<div class="container mx-auto px-4 space-y-8">
		<div class="text-center space-y-4 mb-12">
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground">From Our Kitchen</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
				Discover recipes, wellness tips, and guides to make the most of your natural products
				journey.
			</p>
		</div>

		<ContentCard content={content} />

		<div class="text-center">
			<button
				class="h-10 rounded-md px-6 has-[>svg]:px-4 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
			>
				<a href="/recipes" class="flex items-center">
					View All Recipes
					<ArrowRight class="ml-2 h-4 w-4" />
				</a>
			</button>
		</div>
	</div>
</section>
