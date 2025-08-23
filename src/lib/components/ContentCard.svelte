<script lang="ts">
	import { Badge, User, Calendar } from '@lucide/svelte';
	import { formatDistanceToNow } from 'date-fns';

	const { content } = $props();

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

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
	{#each content as item}
		<div
			class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 overflow-hidden"
		>
			<div class="p-0">
				<div class="aspect-[16/9] overflow-hidden">
					<a href={`/content/${item.slug}`}>
						<img
							src={item.image_url || '/placeholder.png'}
							alt={item.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
						/>
					</a>
				</div>

				<div class="p-6 space-y-4">
					<!-- <div class="flex items-center gap-2">
								<Badge class={getTypeColor(content.type)}>{content.type}</Badge>
								<Badge variant="outline">{content.tags[0]}</Badge>
							</div> -->

					<div class="space-y-2">
						<a href={`/content/${item.slug}`}>
							<h3
								class="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2"
							>
								{item.title}
							</h3>
						</a>
						<p class="text-muted-foreground line-clamp-3">{item.excerpt}</p>
					</div>

					<div class="flex items-center gap-4 text-sm text-muted-foreground">
						<div class="flex items-center gap-1">
							<User class="h-4 w-4" />
							<span>{item.author}</span>
						</div>
						<div class="flex items-center gap-1">
							<Calendar class="h-4 w-4" />
							<span>{formatDistanceToNow(new Date(item.published_at), { addSuffix: true })}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
