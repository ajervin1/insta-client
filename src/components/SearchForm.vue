<template>
	<form @submit.prevent="handleSearch" class="w-50 d-flex">
		<input type="search" placeholder="Search Username" v-model="username"
		       class="form-control rounded-0 rounded-start"/>
		<button class="btn btn-primary rounded-0 rounded-end">Search</button>
	</form>
</template>

<script>
	export default {
		name: 'SearchForm',
		data () {
			return {
				username: 'savmontano'
			}
		},
		methods: {
			async handleSearch () {
				this.$store.state.username = this.username
				await this.$store.commit('searchUser')
				this.username = ''
			}
		}
	}
</script>
