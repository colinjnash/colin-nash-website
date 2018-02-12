import * as actionTypes from '../actions/actionTypes';

import initialState from './initialState';

const contentReducer  = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ENGLISH: 
		console.log('English reported')
		return action;
		default:
			return state;
	}

}

export default contentReducer;