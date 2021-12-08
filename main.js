const app = Vue.createApp({
	data() {
		return {
			product: 'Socks',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur risus in quam vehicula, eget fringilla ipsum finibus. Nulla a odio suscipit, vulputate velit consequat, egestas dui. Aenean sit amet massa eu eros suscipit ornare. Vestibulum eu augue congue, blandit nulla quis',
			image: './assets/images/socks_green.jpg',
			url: 'https://github.com/bismarkstoney',
			inventory: 10,
			onSale: true,
			details: ['50% cotten', '30% wool', '20% polyester'],
		};
	},
});
