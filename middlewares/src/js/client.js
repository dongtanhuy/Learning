import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initState={
	isFetching:false,//sending request
	isFetched:false,//request was sent
	users:[],
	error:null,
	recievedAt:Date.now()
}

const reducer=(state=initState,action)=>{
	switch (action.type){
		case "FETCH_USER_BEGIN":{
			return Object.assign({},state,{isFetching:true})
			break;
		}
		case "RECIEVE_USER":{
			return Object.assign({},state,{isFetching:false,isFetched:true,users:action.data})
			break;
		}
		case "FETCH_USER_FAIL":{
			return Object.assign({},state,{isFetching:false,error:action.data})
			break;
		}
	}
	return state
}

const middleware=applyMiddleware(thunk,logger());
const store=createStore(reducer,middleware);

store.dispatch((dispatch)=>{
	dispatch({type:"FETCH_USER_BEGIN"});
	axios.get("http://rest.learncode.academy/api/wstern/users")
		.then((response)=>{
			dispatch({type:"RECIEVE_USER",data:response.data})
		})//recieve the data
		.catch((err)=>{
			dispatch({type:"FETCH_USER_FAIL",data:err})
		})// if get error
})

