import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			errors: {},
			isLoading: false,
			invalid: false
		}
	    this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.checkUserExists = this.checkUserExists.bind(this);
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);
		
		if(!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

	checkUserExists(e) {
		const field = e.target.name;
		const val = e.target.value;
		if( val !== '') {
			this.props.isUserExists(val).then(res => {
				let errors = this.state.errors;
				let invalid;	
				if( res.data.user) {
					errors[field] = "There is user with such " + field;
					invalid = true;
				} else {
					errors[field] = '';
					invalid = false;
				}
				this.setState({ errors, invalid});
			});
		}
	}

	onSubmit(e) {
		this.setState({ errors: {}, isLoading: true });
		e.preventDefault();
		if (this.isValid()) {
			this.props.userSignupRequest(this.state).then(
				() => {
					this.props.addFlashMessage({
						type: 'success',
						text: 'You have signup successfully. Welcome!'
					});
					this.context.router.push('/');
				},
				(err) => this.setState({ errors: err.response.data, isLoading: false })
			);
		}
	}

	render(){
		const { errors } = this.state;
		return(
			<form onSubmit={this.onSubmit.bind(this)}>
			 	<h1>Sign up</h1>
			 	<br/>

			 	<TextFieldGroup
			 		error={errors.username}
			 		label="Username"
			 		onChange={this.onChange}
			 		checkUserExists={this.checkUserExists}
			 		value={this.state.username}
			 		field="username"
			 	/>

			 	<TextFieldGroup
			 		error={errors.email}
			 		label="Email"
			 		onChange={this.onChange}
			 		checkUserExists={this.checkUserExists}
			 		value={this.state.email}
			 		field="email"
			 	/>

			 	<TextFieldGroup
			 		error={errors.password}
			 		label="Password"
			 		onChange={this.onChange}
			 		value={this.state.password}
			 		field="password"
			 		type="password"
			 	/>

			 	<TextFieldGroup
			 		error={errors.passwordConfirmation}
			 		label="Password Confirmation"
			 		onChange={this.onChange}
			 		value={this.state.passwordConfirmation}
			 		field="passwordConfirmation"
			 		type="password"
			 	/>
			 	<br/>
			 	<div className="form-group">
			 		<button
			 			disabled={this.state.isLoading || this.state.invalid}
			 			name="username"
			 			className="btn btn-success btn-block"
			 		>Sign up</button>
			 	</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired,
	isUserExists: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default SignupForm;