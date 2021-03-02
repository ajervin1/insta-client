<template>
	<section class="posts" id="list">
		<div class="row justify-between">
			<div class="post-column mb-5" v-for="post in $store.state.posts">
				<PostItem :post="post"/>
			</div>
		</div>
	
	</section>
</template>

<script>
	import PostItem from './PostItem'
	
	export default {
		name: 'ListPosts',
		components: { PostItem },

		mounted () {
		
		}
	}
</script>
<style>
	.post-column {
		width: 280px;
	}

</style>
