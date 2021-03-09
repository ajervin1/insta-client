<template>
	<div id="app" class="w-75 mx-auto">
	
		<router-view></router-view>
	</div>
</template>

<script>
	
	
	import { auth } from './db'
	
	export default {
		name: 'App',
		
		methods: {},
		computed: {
			state () {
				return this.$store.state
			}
		},
		mounted () {
			auth.onAuthStateChanged(user => {
				if (user) {
					const { uid, email, } = user
					const new_user = { userId: uid, email }
					this.$store.state.user = new_user
				} else {
					this.$store.state.user = null
				}
			})
		}
		
	}
</script>

