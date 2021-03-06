import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions';
class PostsIndex extends Component {

	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){

		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						{post.title}
					</Link>
				</li>
			)
		})
	}

	render(){
		return (
			<div>
				<Link to='/posts/new'
					className="btn btn-primary">
					Create a Post
				</Link>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps({posts}){
	return { posts }
}
export default connect(mapStateToProps, { fetchPosts})(PostsIndex);
