import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import {createPost} from '../actions';

class PostsNew extends Component {

	inputField(field){
		const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
				className="form-control" type="text" {...field.input}/>
				<div className="text-help">
					{field.meta.touched && field.meta.error ? field.meta.error : ''}
				</div>
			</div>
		)
	}

	onSubmit(values){
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}

	render(){
		const { handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						label='Title'
						name="title"
						component={this.inputField}
					/>
					<Field
						label='Categories'
						name="categories"
						component={this.inputField}
					/>
					<Field
						label='Content'
						name="content"
						component={this.inputField}
					/>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to='/'className="btn btn-danger">
						Cancel
					</Link>
				</form>
			</div>
		)
	}
}

function validate(field){
	let errors = {};

	if(!field.title) {
		errors.title = 'Enter a title';
	}

	if(!field.categories) {
		errors.categories = 'Enter a category';
	}

	if(!field.content) {
		errors.content = 'Enter some content';
	}

	return errors;

}	


export default reduxForm({
	validate: validate,
	form: 'post'
})(connect(null, {createPost})(PostsNew))


