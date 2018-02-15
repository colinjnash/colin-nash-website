import * as actionTypes from '../actions/actionTypes';

const initialState = {
	dropdownNav: false,
	displayTitle: 'Home'
};

const presentationReducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.TOGGLE_NAV:
		console.log('[TOGGLE NAV]');
		console.log(action.value);
		return {
			...state,
			dropdownNav: action.value
		};
	case actionTypes.CHANGE_DISPLAY:
		console.log('[CHANGE DISPLAY]');
		return {
			...state,
			displayTitle: action.value
		};
	default:
		return state;
	}

};

export default presentationReducer;