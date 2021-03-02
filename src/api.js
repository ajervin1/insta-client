const axios = require('axios')



// Get User Posts
export async function fetchUserPosts ({ username = '', media_type = 'image', end_cursor = null }) {
	const { data } = await axios.get('http://localhost:4000/search', {
		params: {
			username,
			media_type,
			end_cursor
		}
	})
	return data
}

