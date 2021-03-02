const axios = require('axios')



// Get User Posts
export async function fetchUserPosts ({ username = '', media_type = 'image', end_cursor = null }) {
	const { data } = await axios.get('https://instaserver100.herokuapp.com/search', {
		params: {
			username,
			media_type,
			end_cursor
		}
	})
	return data
}

