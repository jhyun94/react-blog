import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PostsIndex extends Component {

	render(){
		return (
			<div>
				<Link to='/posts/new'
					className="btn btn-primary">
					Create a Post
				</Link>
			</div>
		)
	}
}

export default PostsIndex;
