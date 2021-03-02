import Vue from 'vue'
import Vuex from 'vuex'
import { fetchUserPosts } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		posts: [],
		end_cursor: null,
		media_type: 'image',
		username: '',
		loading: false
	},
	mutations: {
		// Get User Posts
		async searchUser (state) {
			state.posts = []
			const options = { username: state.username, end_cursor: state.end_cursor, media_type: state.media_type }
			state.loading = true
			const results = await fetchUserPosts(options)
			state.loading = false
			state.posts = results.collector
			state.end_cursor = results.end_cursor
		},
		
		async nextPosts (state) {
			const options = { username: state.username, end_cursor: state.end_cursor, media_type: state.media_type }
			state.loading = true
			const results = await fetchUserPosts(options)
			state.loading = false
			state.posts = [ ...state.posts, ...results.collector ]
			state.end_cursor = results.end_cursor
		},
		// Change Media And Get User Posts Again
		async changeMediaType (state, new_media) {
			console.log('media changing')
			state.media_type = new_media
			state.end_cursor = null
			await store.commit('searchUser')
		},
		async getNextPosts (state) {
			state.prev_cursor = state.end_cursor
			await store.commit('searchUser')
		},
		
	}
})



export default store






