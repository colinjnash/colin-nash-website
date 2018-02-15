import { createStore, combineReducers } from 'redux';
import contentReducer from './contentReducer';
import presentationReducer from './presentationReducer';

export const rootReducer = combineReducers({
	lang: contentReducer,
	pres: presentationReducer
});