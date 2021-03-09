<template>
	<main>
		<NavBar/>
		<MediaOptions class="mb-4"/>
		<ListPosts/>
		<Spinner v-if="$store.state.loading"/>
		<NextButton v-if="$store.state.posts.length"/>
	</main>
</template>

<script>
	import NavBar from '../components/NavBar'
	import MediaOptions from '../components/MediaOptions'
	import ListPosts from '../components/ListPosts'
	import Spinner from '../components/Spinner'
	import NextButton from '../components/NextButton'
	
	export default {
		name: 'Home',
		components: { NextButton, Spinner, ListPosts, MediaOptions, NavBar },
	}
</script>
