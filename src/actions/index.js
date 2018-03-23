import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=jonjon1';
const CREATE_POST = 'create_post';

export function createPost(values){
	const request = axios.post(`${ROOT_URL}${API_KEY}`, values);
	return {
		type: CREATE_POST,
		payload: request
	};
}