import firebase from 'firebase'
import 'firebase/auth'

const { arrayUnion, arrayRemove } = firebase.firestore.FieldValue
const firebaseConfig = {
	apiKey: 'AIzaSyAqJDrarfo0j0eP5gUk9emybfG4kEQj62s',
	authDomain: 'fir-app-302112.firebaseapp.com',
	projectId: 'firebaseapp-302112',
	storageBucket: 'firebaseapp-302112.appspot.com',
	messagingSenderId: '547562435294',
	appId: '1:547562435294:web:fe6de21495a697023e084f',
	measurementId: 'G-5XRPC9HDD6'
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase


export const db = firebase.firestore()
export const auth = firebase.auth()


// Auth Functions
export async function login () {
	// Get The Provider which the third party authentication will go through
	const provider = new firebase.auth.GoogleAuthProvider()
	const userCredential = await auth.signInWithPopup(provider)
	const { email, uid } = userCredential.user
	console.log(userCredential)
	// Now I Need To Create A Record in the user database with these login credentials
	await db.collection('users')
		.doc(uid).set({
			userId: uid,
			email: email
		})
	
	console.log('added to database')
}

export async function logout () {
	auth.signOut()
}

// Firestore Functions
export async function addFollower (userId, user) {
	const composite_key = `${ userId }_${ user.id }`
	console.log(composite_key)
	// Add Username To Following Subcollection of user
	// Use Composite Key For Primary Key Of New Record Must Be Unique
	db.collection('users')
		.doc(userId)
		.collection('followers')
		.doc(composite_key)
		.set({
			username: user.username
		})
	console.log('Following ' + user.username)
}

// Create Playlist
export async function createPlaylist (userId, name) {
	await db.collection('users')
		.doc(userId)
		.collection('playlists')
		.add({
			userId,
			name: name
		})
	console.log('playlist created')
}

export async function listPlaylists (userId) {
	const qs = await db.collection('users')
		.doc(userId)
		.collection('playlists')
		.get()
	const playlists = qs.docs.map(doc => {
		const playlist = doc.data()
		playlist.id = doc.id
		return playlist
	})
	return playlists
}

// Add To Playlist
export async function addVideoToPlaylist (userId, playlistId, video) {
	const composite_key = `${ playlistId }_${ video.id }`
	db.collection('users')
		.doc(userId)
		.collection('playlists')
		.doc(playlistId)
		.collection('videos')
		.doc(composite_key)
		.set({
			playlistId,
			videoId: video.id,
			url: video.url,
			name: video.name
		})
	console.log('Video Added To Playlisst')
}


// Create Cart
export async function createCart (userId, product) {
	db.collection('users')
		.doc(userId)
		.collection('carts')
		.add({
			userId,
			products: arrayUnion(product)
		})
}

export async function addToCart (userId, cartId, product) {
	db.collection('users')
		.doc(userId)
		.collection('carts')
		.doc(cartId)
		.set({
			products: arrayUnion(product)
		}, { merge: true })
}



