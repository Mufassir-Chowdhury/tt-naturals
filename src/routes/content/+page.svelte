<script lang="ts">
	import ContentCard from '$lib/components/ContentCard.svelte';
	const { data } = $props();
	
</script>

<div class="container mx-auto px-4 py-8">
	<!-- Content Header -->
	<div class="mb-12 text-center">
		<h1 class="text-4xl font-bold text-foreground mb-4">From Our Kitchen</h1>
		<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
			Discover recipes, wellness tips, and guides to make the most of your natural products
				journey.
		</p>
	</div>

	<!-- Contents -->
	<ContentCard content={data.content} />
</div>
