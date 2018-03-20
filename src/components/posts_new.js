import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

	renderInput(field){
		console.log(field);
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
					className="form-control"
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
					label='Title'
					name='title'
					component={this.renderInput}
				/>

				<Field
					label='Tags'
					name='title'
					component={this.renderInput}
				/>

				<Field
					label='Content'
					name='title'
					component={this.renderInput}
				/>


			</form>
		)
	}
}


export default reduxForm({
	form: 'newPostForm'
})(PostNew)

