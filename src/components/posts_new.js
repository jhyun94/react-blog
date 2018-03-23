import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

	render(){
		return (
			<Link
				to='/'
				className="btn btn-danger">
				Cancel
			</Link>
		)
	}
}

export default PostsNew;