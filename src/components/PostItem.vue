<template>
	<article class="border post  shadow">
		<div class="media-container">
			<video v-if="post.is_video" :src="post.video_url" controls class="img-fluid"></video>
			<img :src="post.display_url" v-else class="img-fluid">
		</div>
		
		<div class="bg-light p-2">{{ post.description }}</div>
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
		width: 280px;
		height: 280px;
	}
</style>
