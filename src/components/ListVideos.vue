<template>
	<section class="">
		<h2>List Videos With Playlists</h2>
		<p>This is going to loop through all the videos and display all the playlist it can add
			to
		</p>
		<ul class="list-group">
			<li v-for="video in videos" class="list-group-item mb-4">
				<div class="mb-4">
					{{ video.name }}
					<div>
						{{ video.url }}
					</div>
				</div>
				<h6>Playlist You Can Add This Video To</h6>
				<ul class="list-unstyled">
					<li v-for="playlist in playlists" class="border p-3 bg-gray-700 text-white">
						<button @click="handleAdd(playlist, video)"
						        class="btn btn-primary btn-sm">
							Add To {{ playlist.name }}
						</button>
					</li>
				</ul>
			
			</li>
		</ul>
	
	</section>
</template>

<script>
	import { addVideoToPlaylist, listPlaylists } from '../db'
	
	export default {
		name: 'ListVideos',
		data () {
			return {
				playlists: [],
				videos: [
					{ id: 1, name: 'TinaTonkin Video', url: 'bikiniurlvideo' },
					{ id: 2, name: 'Mary Shaking Her Ass', url: 'maryassvideos' },
				]
			}
		},
		methods: {
			async handleAdd (playlist, video) {
				const { userId } = this.$store.state.user
				console.log(`Add ${ video.name } to ${ playlist.name }`)
				await addVideoToPlaylist(userId, playlist.id, video)
			}
		},
		async created () {
			const { userId } = this.$store.state.user
			this.playlists = await listPlaylists(userId)
		}
	}
</script>
