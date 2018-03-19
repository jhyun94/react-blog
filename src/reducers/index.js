import { combineReducers } from 'redux';
import posts from './reducer_posts';

const rootReducer = combineReducers({
  posts: posts
});

export default rootReducer;
