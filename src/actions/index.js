import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
export function fetchPosts() {
	const data = axios.get(`${ROOT_URL}/posts?key=jonjon1`);

	return {
		type: ALL_POSTS,
		payload: data
	}
}

