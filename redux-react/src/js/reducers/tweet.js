const initState={
	tweets:[],
	isFetching:false,
	isFetched:false,
	error:null
};

const tweetReducer=(state=initState,action)=>{
	switch(action.type){
		case "ADD_TWEET":{
			return [...state,action.payload];
			break;
		}
		case "FETCH_TWEETS":{
			return Object.assign({},state,{isFetching:true});
			break;
		}
		case "FETCH_TWEETS_REJECTED":{
			return Object.assign({},state,{
				isFetching:false,
				error:action.payload
			});
			break;
		}
		case "FETCH_TWEETS_FULFILLED":{
			return Object.assign({},state,{
				isFetched:true,
				isFetching:false,
				tweets:action.payload
			});
			break;
		}
	}
	return state;
}
export default tweetReducer;