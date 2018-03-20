import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default class PostNew extends Component {
	render(){
		return (
			<form>
				<Field
					name='title'
					component='input' />
			</form>
		)
	}
}


export default reduxForm({
	form: 'newPostForm'
})

