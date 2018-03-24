import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=jonjon1';

const CREATE_POST = 'create_post';
const FETCH_POSTS = 'fetch_posts';


export function createPost(values){
	const request = axios.post(`${ROOT_URL}${API_KEY}`, values);
	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}

}