import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends React.Component {
	render(){
		const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
		return(
			<div className="row Main">
				<div style={{backgroundColor: 'ghostwhite', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", borderRadius: "5px", width: "30%"}} className="col-md-4 col-md-offset-8">
					<SignupForm
						userSignupRequest={userSignupRequest}
						isUserExists={isUserExists}
						addFlashMessage={addFlashMessage}
					/>
				</div>
			</div>
		);
	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired,
	isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessage, isUserExists})(SignupPage);