<template>
	<button class="btn btn-primary w-75 mx-auto d-block" @click="handleNext">
		Load More
	</button>
</template>

<script>
	export default {
		name: 'NextButton',
		methods: {
			async handleNext () {
				await this.$store.commit('nextPosts')
			}
		}
	}
</script>
