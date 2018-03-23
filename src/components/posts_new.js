import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

	inputField(field){
		console.log(field)
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
				className="form-control" type="text" {...field.input}/>
			</div>
		)
	}

	onSubmit(values){
		console.log(values);
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



export default reduxForm({
	form: 'post'
})(PostsNew);



