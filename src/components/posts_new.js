import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

	renderInput(field){
		const { meta } = field;
		const className = `form-group ${ meta.touched && meta.error ? 'has-danger' : ''}`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				 />
				 <div className="text-help">
				 	{ field.meta.touched ? field.meta.error : ''}
				 	</div>
			</div>
		)
	}

	onSubmit(data){
		console.log(data)
	}

	render(){
		const { handleSubmit} = this.props
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label='Title'
					name='title'
					component={this.renderInput}
				/>

				<Field
					label='Categories'
					name='categories'
					component={this.renderInput}
				/>

				<Field
					label='Content'
					name='content'
					component={this.renderInput}
				/>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

function validate(values){
	const errors = {};

	if (!values.title){
		errors.title = 'Please enter a title';
	}

	if (!values.categories){
		errors.categories = 'Please enter a category';
	}

	if (!values.content){
		errors.content = 'Please enter some content';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'newPostForm'
})(PostNew)

