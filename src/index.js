import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';



// const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
	<BrowserRouter>
		<div>
			<Switch>
				<Route path='/posts/new' component={PostsNew}/>
				<Route path='/' component={PostsIndex}/>
			</Switch>
		</div>
	</BrowserRouter>
  , document.querySelector('.container'));
