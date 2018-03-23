import { CREATE_POST } from '../actions';

export default function(state, action){
	switch(action.type){
		case CREATE_POST:
			return {...state, [action.payload.data.id]: action.payload.data}
	}
}