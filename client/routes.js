import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/Welcome';
import SignupPage from './components/signup/SignupPage'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Welcome} />
		<Route path="/signup" component={SignupPage} />
	</Route>
)