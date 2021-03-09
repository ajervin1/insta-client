<template>
	<article class="border post rounded-top rounded-bottom  shadow-lg">
		<div class="media-container rounded-top">
			<video v-if="post.is_video" :src="post.video_url" controls class="img-fluid"></video>
			<img :src="post.display_url" v-else class="img-fluid">
		</div>
		
		<div class="bg-light p-2 rounded-bottom">{{ post.description }}</div>
	</article>
</template>

<script>
	export default {
		name: 'PostItem',
		props: [ 'post' ]
		
	}
</script>
<style>
	.post {
		width: 280px;
	}
	.img-fluid {
		height: 100%;
		width: 100%;
		object-fit: cover;
		
	}
	.media-container {
		overflow: hidden;
		width: 280px;
		height: 280px;
	}
</style>
