const app = Vue.createApp({
	data() {
		return {
			product: 'Socks',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur risus in quam vehicula, eget fringilla ipsum finibus. Nulla a odio suscipit, vulputate velit consequat, egestas dui. Aenean sit amet massa eu eros suscipit ornare. Vestibulum eu augue congue, blandit nulla quis',
			image: './assets/images/socks_green.jpg',
			url: 'https://github.com/bismarkstoney',
			inventory: 10,
			inStock: false,
			onSale: true,
			details: ['50% cotten', '30% wool', '20% polyesters '],
			variants: [
				{ id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
				{ id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
			],
			sizes: ['S', 'M', 'L', 'XL', 'XXL'],
			cart: 0,
		};
	},
	methods: {
		addToCart() {
			return (this.cart += 1);
		},
		decrementCard() {
			return (this.cart -= 1);
		},
		updateImage(varientImage) {
			return (this.image = varientImage);
		},
	},
});
