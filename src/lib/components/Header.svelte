<script lang="ts">
    import { Leaf } from "@lucide/svelte"

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'All Products', href: '/products' },
		{ name: 'Articles', href: '/article' },
		{ name: 'About Us', href: '/about' }
	];
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60"
>
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-2">
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
					<Leaf class="h-5 w-5 text-primary-foreground" />
				</div>
				<span class="text-xl font-bold text-foreground">T & Tea Naturals</span>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex items-center space-x-6">
				{#each navigation as item}
					<a
						href={item.href}
						class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
					>
						{item.name}
					</a>
				{/each}
			</nav>

			<!-- Actions -->
			<div class="flex items-center space-x-4">
				<!-- <Button variant="ghost" size="icon" class="hidden md:flex">
              <Search class="h-5 w-5" />
            </Button>

            <CartSidebar />

            <Button variant="ghost" size="icon">
              <User class="h-5 w-5" />
            </Button> -->
				<!-- 
            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" class="lg:hidden">
                  <Menu class="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" class="w-80">
                <div class="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      class="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet> -->
			</div>
		</div>
	</div>
</header>
