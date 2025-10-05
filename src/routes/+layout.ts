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
	const testimonials = [
		{
			id: '1',
			name: 'Mardia Mumtaz',
			review: 'ঘী আর সরিষার তেল পেয়েছি। ঘ্রাণ, মান বিচারে খাঁটি মনে হয়েছে।'
		},
		{
			id: '2',
			name: 'Salahuddin Mahmud',
			review: 'আমি ১ কেজি ঘি অর্ডার করেছিলাম হাতে পেয়েছি। ঘ্রাণ এবং মান আলহামদুলিল্লাহ অনেক ভালো। আর ভাইদের ব্যবহার অনেক অমায়িক।'
		},
		{
			id: '3',
			name: 'Rabiul Islam',
			review: 'অনেকদিন পর T & Tea Naturals থেকে ঘি নিয়েছি, প্রত্যাশা যতটুকু ছিল তার চেয়ে আলহামদুলিল্লাহ অনেক ভালো।  স্বাদে ঘ্রাণে অতুলনীয়। আমি কয়েকজনকে খাইয়েছি খাটি কিনা নিশ্চিত হবার জন্য, সবাই এক বাক্যে বলেছে সেরা ঘি। গরম ভাত দিয়ে খাওয়ার পরেও হাতে ঘি এর ঘ্রান লেগে থাকে আপনাদের ব্যবসায় আল্লাহ বারাকাহ দিক।আমি ইনশাআল্লাহ আপনাদের ঘি এর রেগুলার কাস্টমার হয়ে গেলাম। ঘি আমার অনেক শখের জিনিস।'
		},
		{
			id: '4',
			name: 'Tahmina Miah',
			review: 'MashaAllah, the ghee is of a very good quality. I fed my toddler pure ghee and white rice and he enjoyed it. it smells great too!'
		},
		{
			id: '5',
			name: 'Yousuf Bin Hussain Khan',
			review: 'আলহামদুলিল্লাহ, একদম দেশি স্বাদ ও ঘ্রাণ – মনের মতো ঘি! গত সপ্তাহে বাংলাদেশে বাসার জন্য অর্ডার করেছিলাম, তাদের ভাষায় সত্যি বলতে, এটা এক কথায় অসাধারণ আলহামদুলিল্লাহ। মুখে দিলে বুঝা যায় এটা প্রাকৃতিক উপায়ে বানানো হয়েছে। ভাতের সাথে, খিচুড়িতে, এমনকি তরকারিতেও ব্যবহার করা হয়েছে স্বাদে একটা আলাদা গভীরতা যোগ হয়। সবচেয়ে ভালো লেগেছে যে এটা সম্পূর্ণ প্রাকৃতিক এবং কোনো কেমিক্যাল বা প্রিজারভেটিভ ছাড়া যা খাওয়ার পর নিশ্চিত বলতে বাধ্য। বাজারের ঘি’র চেয়ে অনেক বেশি খাঁটি ও স্বাস্থ্যকর মনে হয়েছে। আমি আবার কিনে পাঠাবো ইনশাআল্লাহ!'
		},
		{
			id: '6',
			name: 'Md Kamrul Huda Fudayl',
			review: 'Authentic & Exceptional – Worth Every Penny. T & Tea Naturals delivers outstanding quality. The ghee is rich, aromatic, and feels truly premium like it’s been made with care. The mustard oil has that strong, authentic punch my Amma loves almost medicinal in its purity. Real, honest ingredients that bring the taste of village. Thank you, T & Tea!'
		},
		{
			id: '7',
			name: 'Mahmud Rahman MuAzz',
			review: 'অথেন্টিক ঘী.... ৭ স্টার রিভিও ফ্রম আম্মু 🚩🚩🚩'
		}
	]
    return {
        products: products,
        categories: categories,
        content: content  ,
		testimonials: testimonials
    };
};