<script>
    import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "@lucide/svelte"
    
	const { categories } = $props();
</script>

<footer class="bg-card border-t">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Brand -->
			<div class="space-y-4">
				<a href="/" class="flex items-center space-x-2">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
						<Leaf class="h-5 w-5 text-primary-foreground" />
					</div>
					<span class="text-xl font-bold text-foreground">T & Tea Naturals</span>
				</a>
				<p class="text-sm text-muted-foreground">
					Premium natural products sourced with care. From traditional teas to authentic pickles, we
					bring you the finest quality products for a healthier lifestyle.
				</p>
				<div class="flex space-x-4">
                    <a href='#'>
                        <Facebook class="h-4 w-4" />
                    </a>
                    <a href='#'>
                        <Instagram class="h-4 w-4" />
                    </a>
                    <a href='#'>
                        <Twitter class="h-4 w-4" />
                    </a>
				</div>
			</div>

			<!-- Quick Links -->
			<div class="space-y-4">
				<h3 class="text-lg font-semibold text-foreground">Quick Links</h3>
				<div class="space-y-2">
					<a
						href="/about"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						About Us
					</a>
					<a
						href="/contact"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						Contact
					</a>
					<a
						href="/shipping"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						Shipping Info
					</a>
					<a
						href="/returns"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						Returns & Exchanges
					</a>
					<a
						href="/faq"
						class="block text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						FAQ
					</a>
				</div>
			</div>

			<!-- Categories -->
			<div class="space-y-4">
				<h3 class="text-lg font-semibold text-foreground">Categories</h3>
				<div class="space-y-2">
					{#each categories as category}
						<a
							href={`/products`}
							class="block text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							{category.name}
						</a>
					{/each}
				</div>
			</div>

			<!-- Contact & Newsletter -->
			<div class="space-y-4">
				<h3 class="text-lg font-semibold text-foreground">Stay Connected</h3>
				<div class="space-y-3">
					<div class="flex items-center space-x-2 text-sm text-muted-foreground">
						<Mail class="h-4 w-4" />
						<span>info@tteanaturals.com</span>
					</div>
					<div class="flex items-center space-x-2 text-sm text-muted-foreground">
						<Phone class="h-4 w-4" />
						<span>+44 7835 253874</span>
					</div>
					<div class="flex items-center space-x-2 text-sm text-muted-foreground">
						<MapPin class="h-4 w-4" />
						<span>Bangladesh</span>
					</div>
				</div>

				<div class="space-y-2">
					<p class="text-sm font-medium text-foreground">Subscribe to our newsletter</p>
					<div class="flex space-x-2">
						<!-- <Input placeholder="Enter your email" class="flex-1" />
                <Button size="sm">Subscribe</Button> -->
					</div>
				</div>
			</div>
		</div>

		<div class="border-t mt-8 pt-8 text-center">
			<p class="text-sm text-muted-foreground">
				© 2025 T & Tea Naturals. All rights reserved. |
				<a href="/privacy" class="hover:text-primary transition-colors ml-1">
					Privacy Policy
				</a>{' '}
				|
				<a href="/terms" class="hover:text-primary transition-colors ml-1"> Terms of Service </a>
			</p>
		</div>
	</div>
</footer>
