import {combineReducers} from 'redux';
import userReducer from './user';
import tweetReducer from './tweet';


export default combineReducers({
	user:userReducer,
	tweets:tweetReducer
});
