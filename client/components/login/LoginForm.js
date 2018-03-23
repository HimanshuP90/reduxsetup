import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/login';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			identifier: '',
			password: '',
			errors: {},
			isLoading: false
		}
	    this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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

	onSubmit(e) {
		this.setState({ errors: {}, isLoading: true });
		e.preventDefault();
		if (this.isValid()) {
			this.props.login(this.state).then(
				() => {
					this.context.router.push('/');
				},
				(err) => this.setState({ errors: err.response.data, isLoading: false })
			);
		}
	}

	render(){
		const { errors, identifier, password, isLoading } = this.state;
		return(
			<form onSubmit={this.onSubmit.bind(this)}>
			 	<h1>Login</h1>
			 	<br/>
			 	{ errors.errors  && <div className="alert alert-danger">{errors.errors}</div>}
			 	<TextFieldGroup
			 		error={errors.identifier}
			 		label="Username / Email"
			 		onChange={this.onChange}
			 		value={identifier}
			 		field="identifier"
			 	/>
			 	<TextFieldGroup
			 		error={errors.password}
			 		label="Password"
			 		onChange={this.onChange}
			 		value={this.state.password}
			 		field="password"
			 		type="password"
			 	/>
			 	<br/>
			 	<div className="form-group">
			 		<button
			 			disabled={this.state.isLoading}
			 			name="username"
			 			className="btn btn-success btn-block"
			 		>Login</button>
			 	</div>
			</form>
		);
	}
}

LoginForm.propTypes = {
	login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
	router: React.PropTypes.object.isRequired
}
export default connect(null, {login})(LoginForm);