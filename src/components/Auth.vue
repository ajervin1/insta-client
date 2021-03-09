<template>
	<div class="auth">
		
		<button v-if="!$store.state.user"
		        @click="handleLogin"
		        class="btn btn-primary btn-sm">
			Login
		</button>
		<button
				@click="handleLogout"
				v-else class="btn btn-danger btn-sm">
			Logout
		</button>
	
	</div>
</template>

<script>
	import { login, logout } from '../db'
	
	export default {
		name: 'Auth',
		methods: {
			async handleLogin () {
				await login()
			},
			async handleLogout () {
				await logout()
			}
		}
	}
</script>
