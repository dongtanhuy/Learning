import {combineReducers,createStore} from 'redux';
import userReducer from './reducers/user';
import tweetReducer from './reducers/tweet';


const reducer=combineReducers({
	user:userReducer,
	tweet:tweetReducer
});

const store=createStore(reducer,window.devToolsExtension && window.devToolsExtension());

store.subscribe(()=>{
	console.log("store changed:",store.getState());
});
store.dispatch({type:"CHANGE_NAME",data:"Huy"});
store.dispatch({type:"CHANGE_AGE",data:20});
store.dispatch({type:"ADD_TWEET",data:"I am learning redux"});
