import * as actionTypes from '../actions/actionTypes';

const initialState = {
	dropdownNav: false,
	displayTitle: 'Home',
	github: null
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
		console.log(action.value);
		return {
			...state,
			displayTitle: action.value
		};
	case actionTypes.ADD_GIT:
		console.log(['ADD GIT']);
		let newArray = action.value.data.slice(0,5);
		return {
			...state,
			github: newArray
		};
	default:
		return state;
	}

};

export default presentationReducer;