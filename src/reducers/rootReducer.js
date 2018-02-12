import { createStore, combineReducers } from 'redux';
import contentReducer from './contentReducer';

export const rootReducer = combineReducers({
	lang: contentReducer
});