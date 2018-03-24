import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostsShow extends Component {

	componentDidMount(){
		const id = this.props.match.params.id;
		this.props.fetchPost(id)
	}

	render(){
		const {post} = this.props

		if(!post){
			return <div>..loading</div>
		}
		return (
			<div>
				<Link to='/'>
					Back
				</Link>
				<div>
					<h1>{post.title}</h1>
					<h3>Categories: {post.categories}</h3>
					<p>{post.content}</p>
				</div>
			</div>
		)
	}
}

function mapStateToProps({posts}, ownProps){
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);