import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './reducer_posts';


const rootReducer = combineReducers({
	form: formReducer,
	posts: posts
})

export default rootReducer;