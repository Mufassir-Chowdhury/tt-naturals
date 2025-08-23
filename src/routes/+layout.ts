import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => {
    const products = [
		{
			id: '1',
			name: 'Premium Teas',
			slug: 'premium-teas',
			description: 'Handpicked teas from the finest gardens',
			image_url: '/premium-tea-leaves.png',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
			price: 499.99,
			compare_price: 599.99,
            weight: 250,
			featured: true,
            short_description:
                'Experience the rich flavors of our premium teas sourced from the best gardens.'
		},
		{
			id: '2',
			name: 'Natural Oils',
			slug: 'natural-oils',
			description: 'Pure, cold-pressed oils for wellness',
			image_url: '/placeholder.png',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
            price: 299.99,
            weight: 250,
            featured: false,
            short_description:
                'Discover the benefits of our natural oils, perfect for cooking and skincare.'
		}
	];
    const categories = [
		{ name: 'Teas', slug: 'teas' },
		{ name: 'Pickles', slug: 'pickles' },
		{ name: 'Spices', slug: 'spices' },
		{ name: 'Herbal Products', slug: 'herbal-products' }
	];
    const content = [
        {
            id: '1',
            title: '5 Health Benefits of Drinking Green Tea',
            excerpt:
                'Discover the numerous health benefits of incorporating green tea into your daily routine.',
            content: `Green tea has been consumed for centuries and is renowned for its numerous health benefits. Here are five compelling reasons to include green tea in your daily routine: \n\n1. Rich in Antioxidants: Green tea is packed with antioxidants, particularly catechins, which help combat oxidative stress and reduce the risk of chronic diseases. \n\n2. Boosts Metabolism: The compounds in green tea can enhance metabolic rate and increase fat burning, making it a great addition to a weight management plan. \n\n3. Supports Heart Health: Regular consumption of green tea has been linked to improved cardiovascular health by lowering LDL cholesterol levels and improving blood flow. \n\n4. Enhances Brain Function: The caffeine and amino acid L-theanine in green tea work together to improve brain function, enhancing focus, memory, and mood. \n\n5. Promotes Relaxation: L-theanine also promotes relaxation without causing drowsiness, making green tea a perfect beverage for stress relief.\n\nIncorporating green tea into your daily routine can provide these health benefits and contribute to overall well-being.`,
            image_url: '/placeholder.png',
            type: 'article',
            tags: ['Health', 'Wellness', 'Tea'],
            author: 'Jane Doe',
            slug: 'health-benefits-of-drinking-green-tea',
            published_at: new Date().toISOString()
        },
		{
			id: '2',
			title: 'How to Brew the Perfect Cup of Tea',
			excerpt: 'Learn the art of brewing the perfect cup of tea with our step-by-step guide.',
            content: `Green tea has been consumed for centuries and is renowned for its numerous health benefits. Here are five compelling reasons to include green tea in your daily routine: \n\n1. Rich in Antioxidants: Green tea is packed with antioxidants, particularly catechins, which help combat oxidative stress and reduce the risk of chronic diseases. \n\n2. Boosts Metabolism: The compounds in green tea can enhance metabolic rate and increase fat burning, making it a great addition to a weight management plan. \n\n3. Supports Heart Health: Regular consumption of green tea has been linked to improved cardiovascular health by lowering LDL cholesterol levels and improving blood flow. \n\n4. Enhances Brain Function: The caffeine and amino acid L-theanine in green tea work together to improve brain function, enhancing focus, memory, and mood. \n\n5. Promotes Relaxation: L-theanine also promotes relaxation without causing drowsiness, making green tea a perfect beverage for stress relief.\n\nIncorporating green tea into your daily routine can provide these health benefits and contribute to overall well-being.`,
			image_url: '/placeholder.png',
            type: 'article',
            tags: ['Health', 'Wellness', 'Tea'],
            author: 'Jane Doe',
			slug: 'how-to-brew-perfect-tea',
            published_at: new Date().toISOString()
		},
		{
			id: '3',
			title: 'Top 10 Natural Remedies for Common Ailments',
			excerpt: 'Explore natural remedies that can help alleviate common health issues.',
            content: `Green tea has been consumed for centuries and is renowned for its numerous health benefits. Here are five compelling reasons to include green tea in your daily routine: \n\n1. Rich in Antioxidants: Green tea is packed with antioxidants, particularly catechins, which help combat oxidative stress and reduce the risk of chronic diseases. \n\n2. Boosts Metabolism: The compounds in green tea can enhance metabolic rate and increase fat burning, making it a great addition to a weight management plan. \n\n3. Supports Heart Health: Regular consumption of green tea has been linked to improved cardiovascular health by lowering LDL cholesterol levels and improving blood flow. \n\n4. Enhances Brain Function: The caffeine and amino acid L-theanine in green tea work together to improve brain function, enhancing focus, memory, and mood. \n\n5. Promotes Relaxation: L-theanine also promotes relaxation without causing drowsiness, making green tea a perfect beverage for stress relief.\n\nIncorporating green tea into your daily routine can provide these health benefits and contribute to overall well-being.`,
			image_url: '/placeholder.png',
            type: 'article',
            tags: ['Health', 'Wellness', 'Tea'],
			slug: 'top-natural-remedies',
            author: 'Jane Doe',
            published_at: new Date().toISOString()
		}
	];
    return {
        products: products,
        categories: categories,
        content: content  
    };
};