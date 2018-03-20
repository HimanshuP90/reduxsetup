import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
	render(){
		return(
			<div className="row Main">
				<div style={{backgroundColor: 'ghostwhite', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", borderRadius: "5px", width: "30%"}} className="col-md-4 col-md-offset-8">
					<LoginForm
					/>
				</div>
			</div>
		);
	}
}

export default LoginPage;