const tweetReducer=(state=[],action)=>{
	switch(action.type){
		case"ADD_TWEET":{
			return [...state,action.data];
			break;
		}
	}
	return state;
}
export default tweetReducer;