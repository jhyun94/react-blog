import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise'

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';



const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducer)}>
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
