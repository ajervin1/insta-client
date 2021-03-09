<template>
	<header class="flex align-items-center justify-content-between mb-4">
		<a href="#" @click="handleRefresh">
				<h2 class="font-light m-0" >InstaScraper</h2>
		</a>
	
		<SearchForm class=""/>
		<Auth/>
	</header>
</template>

<script>
	import SearchForm from './SearchForm'
	import Auth from './Auth'
	
	export default {
		name: 'NavBar',
		components: { Auth, SearchForm },
		methods: {
			handleRefresh () {
				this.$router.go(0)
			}
		}
	}
</script>
