import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

	renderInput(field){
		console.log(field);
		return (
			<div>
				<input 
					type="text"
					{...field.input}
				 />
			</div>
		)
	}

	render(){
		return (
			<form>
				<Field
					name='title'
					component={this.renderInput} />
			</form>
		)
	}
}


export default reduxForm({
	form: 'newPostForm'
})(PostNew)

