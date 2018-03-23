import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './components/posts_index';



// const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' component={PostsIndex}/>
		</Switch>
	</BrowserRouter>
  , document.querySelector('.container'));
