import React from 'react';
import classnames from 'classnames';

class SignupForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			passwordConfirmation: '',
			errors: {},
			isLoading: false
		}
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value})
	}

	onSubmit(e) {
		this.setState({ errors: {}, isLoading: true });
		e.preventDefault();
		this.props.userSignupRequest(this.state).then(
			() => console.log("success"),
			(err) => this.setState({ errors: err.response.data, isLoading: false })
		);
	}

	render(){
		const { errors } = this.state;
		return(
			<form onSubmit={this.onSubmit.bind(this)}>
			 	<h1>Register to create account</h1>
			 	<br/>
			 	<div className={classnames("form-group", { 'has-error': errors.username })}>
			 		<label className="control-label">Username</label>
			 		<input
			 			value={this.state.username}
			 			onChange={this.onChange.bind(this)}
			 			type="text"
			 			name="username"
			 			className="form-control"
			 		/>
			 		{ errors.username && <span className="helop-block">{errors.username}</span>}
			 	</div>
			 	<div className={classnames("form-group", { 'has-error': errors.password })}>
			 		<label className="control-label">Password</label>
			 		<input
			 			value={this.state.password}
			 			onChange={this.onChange.bind(this)}
			 			type="password"
			 			name="password"
			 			className="form-control"
			 		/>
			 		{ errors.password && <span className="helop-block">{errors.password}</span>}
			 	</div>
			 	<div className={classnames("form-group", { 'has-error': errors.passwordConfirmation })}>
			 		<label className="control-label">Password Confirmation</label>
			 		<input
			 			value={this.state.passwordConfirmation}
			 			onChange={this.onChange.bind(this)}
			 			type="password"
			 			name="passwordConfirmation"
			 			className="form-control"
			 		/>
			 		{ errors.passwordConfirmation && <span className="helop-block">{errors.passwordConfirmation}</span>}
			 	</div>
			 	<div className="form-group">
			 		<button
			 			disabled={this.state.isLoading}
			 			name="username"
			 			className="btn btn-primary btn-lg"
			 		>Sign up</button>
			 	</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;