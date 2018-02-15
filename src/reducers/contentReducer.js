import * as actionTypes from '../actions/actionTypes';

const initialState = {
	content: [],
	isEnglish: true,
	lang:'FR' 
};

const contentReducer  = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.ENGLISH: 
		console.log('[Language Setting:English]');
		console.log(action.value);
		if (state.lang == 'FR') {
			return {		...state,
				isEnglish: action.value,
				lang:'EN'		};
		} else {
			return {
				...state,
				isEnglish: action.value,
				lang:'FR'			
			};	
		}
	
	default:
		return state;
	}

};

export default contentReducer;