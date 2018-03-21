import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
export function fetchPosts() {
	const data = axios.get(`${ROOT_URL}/posts?key=jonjon1`);

	return {
		type: FETCH_POSTS,
		payload: data
	}
}

export function createPost(data, callback) {
	const request = axios.post(`${ROOT_URL}/posts?key=jonjon1`, data)
		.then( () => callback())

	return {
		type: CREATE_POST,
		payload: request
	}
}

