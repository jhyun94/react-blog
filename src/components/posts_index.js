import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions'

class PostsIndex extends Component {

	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts,  (post) => {
			return (
				<li key={post.id}>{post.title}</li>
			)
		})
	}

	render(){
		return (
			<div>PostsIndex</div>
		)
	}
}

function mapStateToProps(state){
	return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);


