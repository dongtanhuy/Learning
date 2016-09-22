import {applyMiddleware,createStore} from 'redux';

const reducer=(initState,action)=>{
	switch (action.type){
		case "INC":{
			return initState+1;
			break;
		}
		case "DEC":{
			return initState-1;
			break;
		}logger
		case "E":{
			throw new Error("This is an error");
		}
	}
	return initState
}

const logger=(store)=>(next)=>(action)=>{
	console.log('dispatching',action);
	let result=next(action);
	console.log('next state',store.getState());
	return result;
}

const errorHandler=(store)=>(next)=>(action)=>{
	try{
		next(action)
	}catch(e){
		console.log("Middleware",e);
	}
	// let result=next(action);
	// return result;
}
const middleware=applyMiddleware(logger,errorHandler);
const store=createStore(reducer,1,middleware);

// store.subscribe(()=>{
// 	console.log("store changed:",store.getState());
// });
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"E"});
