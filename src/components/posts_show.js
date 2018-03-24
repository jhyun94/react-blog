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
		const {posts} = this.props
		if(!posts){
			return <div>..loading</div>
		}
		return (
			<Link to='/'>
				Back
			</Link>
		)
	}
}

function mapStateToProps({posts}){
	return { posts }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);