import _ from 'lodash';
import { CREATE_POST, FETCH_POSTS } from '../actions';

export default function(state=null, action){
	switch(action.type){
		case CREATE_POST:
			return {...state, [action.payload.data.id]: action.payload.data}
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id')
		default:
			return state
	}
}