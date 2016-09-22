const userReducer=(state={},action)=>{
	switch (action.type){
		case "CHANGE_NAME":{
			return Object.assign({},state,{name:action.data});
			break;
		}
		case "CHANGE_AGE":{
			return Object.assign({},state,{age:action.data});
			break;
		}
	}
	return state;
}
export default userReducer;