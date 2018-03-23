import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';



// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(reducer);


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/posts/new' component={PostsNew}/>
					<Route path='/' component={PostsIndex}/>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
  , document.querySelector('.container'));
