const initState={
	user:{
		id:null,
		name:null,
		age:null,
	},
	isFetching:false,
	isFetched:false,
	error:null
};

const userReducer=(state=initState,action)=>{
	switch (action.type){
		case "SET_USER_NAME":{
			return Object.assign({},state,
				{user:{name:action.payload}}//Object assign with nested object
			);
			break;
		}
		case "SET_USER_AGE":{
			return Object.assign({},state,{user:{age:action.payload}});
			break;
		}
		case "FETCH_USER":{
			return Object.assign({},state,{
				isFetching:true});
			break;
		}
		case "FETCH_USER_REJECTED":{
			return Object.assign({},state,{
				isFetching:false,
				error:action.payload
			});
			break;
		}
		case "FETCH_USER_FULFILLED":{
			return Object.assign({},state,{
				isFetched:true,
				isFetching:false,
				user:action.payload
			});
			break;
		}
	}
	return state;
}
export default userReducer;