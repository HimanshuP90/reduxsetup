import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import { items, itemsHasErrored, itemsIsLoading } from './reducers/items';

import auth from './reducers/auth';

export default combineReducers({
	flashMessages,
	auth,
	items,
	itemsHasErrored,
	itemsIsLoading
});