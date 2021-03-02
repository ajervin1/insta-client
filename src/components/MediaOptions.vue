<template>
<ul class="nav nav-tabs  justify-content-center">
	<a href="#" class="nav-item nav-link" :class="{'active': $store.state.media_type === 'image'}" @click="changeMedia('image')">
		<i class="fa fa-image"></i>
		Images
	</a>
	<a href="#" class="nav-item nav-link" :class="{'active': $store.state.media_type === 'video'}" @click="changeMedia('video')">
		<i class="fa fa-video"></i>
		Videos
	</a>
</ul>
</template>

<script>
	export default {
		name: 'MediaOptions',
		data () {
			return {
				media_options: [ 'image', 'video', ]
			}
		},
		methods: {
			async changeMedia (media) {
			
				await this.$store.commit('changeMediaType', media)
			}
		}
	}
</script>
