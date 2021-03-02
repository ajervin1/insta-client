<template>
	<div id="app"  class="w-75 mx-auto">
		<header class="flex align-items-center justify-content-between mb-4">
			
				<h2 class="font-light m-0">InstaScraper</h2>
				<SearchForm />
		
		</header>

		<MediaOptions class="mb-4"/>
	
		<ListPosts/>
		<Spinner v-if="state.loading == true"/>
		<NextButton class="mb-4" v-if="state.posts.length"/>
	</div>
</template>

<script>
	
	
	import SearchForm from './components/SearchForm'
	import ListPosts from './components/ListPosts'
	import MediaOptions from './components/MediaOptions'
	import NextButton from './components/NextButton'
	import Spinner from './components/Spinner'
	
	export default {
		name: 'App',
		components: { Spinner, NextButton, MediaOptions, ListPosts, SearchForm },
		data () {
			return {
				
				scrolledToBottom: false,
				busy: false,
			}
		},
		methods: {
		
		},
		computed: {
			state () {
				return this.$store.state
			}
		},
		mounted () {
		
		}
		
	}
</script>

