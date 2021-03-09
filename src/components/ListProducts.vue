<template>
	<section class="">
		<h2>List Products and Add To Cart Button</h2>
		<p>
			List all the products with an add to cart button for that specific item
		</p>
		<ul class="list-group">
			<li class="list-group-item mb-4" v-for="product in products">
				<div>{{ product.name }}</div>
				<div v-if="!cartItems.includes(product)">
					Item Already In cart
				</div>
				<button v-else
				
				
				        class="btn btn-primary btn-sm" @click="handleAdd(product)">
					Add {{ product.name }} To Cart
				</button>
			</li>
		</ul>
	
	
	</section>
</template>

<script>
	import { addToCart, db } from '../db'
	
	export default {
		name: 'ListProducts',
		data () {
			return {
				cartItems: [],
				products: [
					{
						id: 1,
						name: 'Ass Picture',
					},
					{
						id: 2,
						name: 'Titty Picture',
					},
					{
						id: 3,
						name: 'Sex Video',
					}
				]
			}
		},
		methods: {
			async handleAdd (product) {
				const { userId } = this.$store.state.user
				const cartId = this.$store.state.cartId
				await addToCart(userId, cartId, product)
				console.log('added To Cart')
			},
			
		},
		async created () {
			const { userId } = this.$store.state.user
			const cartId = this.$store.state.cartId
			const docsnap = await db.collection('users')
				.doc(userId)
				.collection('carts')
				.doc(cartId).get()
			
			this.cartItems = docsnap.data().products
		}
	}
</script>
