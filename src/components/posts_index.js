import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
class PostsIndex extends Component {

	componentWillMount(){
		this.props.fetchPosts();
	}

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

function mapStateToProps({posts}){
	return { posts }
}
export default connect(mapStateToProps, { fetchPosts})(PostsIndex);
