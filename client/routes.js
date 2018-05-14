import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/Welcome';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Dashboard from './components/Dashboard';
import requireAuth from './utils/requireAuth';
import ItemList from './components/ItemList';
import Products from './components/Products';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Welcome} />
		<Route path="signup" component={SignupPage} />
		<Route path="login" component={LoginPage} />
		<Route path="item" component={ItemList} />
		<Route path="product" component={Products} />
		<Route path="dash" component={requireAuth(Dashboard)} />
	</Route>
)