import * as actionTypes from '../actions/actionTypes';

const initialState = {
	content: [],
	isEnglish: true
};

const contentReducer  = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.ENGLISH: 
		console.log('[Language Setting:English]');
		console.log(action.value);
		return {
			...state,
			isEnglish: action.value
		}
	default:
		return state;
	}

};

export default contentReducer;