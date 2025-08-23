<script lang="ts">
	import { Calendar, User, Clock } from '@lucide/svelte';
	import { formatDistanceToNow } from 'date-fns';

	const content = {
		id: '1',
		title: '5 Health Benefits of Drinking Green Tea',
		excerpt:
			'Discover the numerous health benefits of incorporating green tea into your daily routine.',
		content: `Green tea has been consumed for centuries and is renowned for its numerous health benefits. Here are five compelling reasons to include green tea in your daily routine: \n\n1. Rich in Antioxidants: Green tea is packed with antioxidants, particularly catechins, which help combat oxidative stress and reduce the risk of chronic diseases. \n\n2. Boosts Metabolism: The compounds in green tea can enhance metabolic rate and increase fat burning, making it a great addition to a weight management plan. \n\n3. Supports Heart Health: Regular consumption of green tea has been linked to improved cardiovascular health by lowering LDL cholesterol levels and improving blood flow. \n\n4. Enhances Brain Function: The caffeine and amino acid L-theanine in green tea work together to improve brain function, enhancing focus, memory, and mood. \n\n5. Promotes Relaxation: L-theanine also promotes relaxation without causing drowsiness, making green tea a perfect beverage for stress relief.\n\nIncorporating green tea into your daily routine can provide these health benefits and contribute to overall well-being.`,
		image_url: '/placeholder.png',
		type: 'article',
		tags: ['Health', 'Wellness', 'Tea'],
		author: 'Jane Doe',
		published_at: new Date().toISOString()
	};

	const getTypeColor = (type: string) => {
		switch (type) {
			case 'recipe':
				return 'bg-green-100 text-green-800';
			case 'guide':
				return 'bg-blue-100 text-blue-800';
			case 'article':
				return 'bg-purple-100 text-purple-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};
</script>

<div class="container mx-auto px-4 py-8">
	<article class="max-w-4xl mx-auto">
		<header class="mb-8">
			<div class="flex items-center gap-2 mb-4">
				<div
					class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 {getTypeColor(
						content.type
					)}"
				>
					{content.type}
				</div>
				{#each content.tags as tag}
					<div
						class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
					>
						{tag}
					</div>
				{/each}
			</div>

			<h1 class="text-4xl font-bold text-foreground mb-4">{content.title}</h1>
			<p class="text-xl text-muted-foreground mb-6">{content.excerpt}</p>

			<div class="flex items-center gap-6 text-sm text-muted-foreground mb-8">
				<div class="flex items-center gap-2">
					<User class="h-4 w-4" />
					<span>{content.author}</span>
				</div>
				<div class="flex items-center gap-2">
					<Calendar class="h-4 w-4" />
					<span>{formatDistanceToNow(new Date(content.published_at), { addSuffix: true })}</span>
				</div>
				<div class="flex items-center gap-2">
					<Clock class="h-4 w-4" />
					<span>5 min read</span>
				</div>
			</div>

			<div class="aspect-[16/9] overflow-hidden rounded-lg mb-8">
				<img
					src={content.image_url || '/placeholder.svg'}
					alt={content.title}
					class="w-full h-full object-cover"
				/>
			</div>
		</header>

		<div class="prose prose-lg max-w-none">
			{@html content.content.replace(/\n/g, '<br/>')}
		</div>
	</article>
</div>
