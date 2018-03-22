import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends Component {

	render(){
		return (
			<div>PostShow</div>
		)
	}
}

function mapStateToProps({posts}, ownProps){
	return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost})(PostShow);



