import React from 'react';
import {connect} from 'react-redux';//check here for more detail https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
import {fetchUser} from '../actions/userAction'
import {fetchTweets} from '../actions/tweetsAction'
@connect((store)=>{
	return{
		user:store.user.user,
		userFetched:store.user.isFetched,
		tweets:store.tweets.tweets
	};
})
export default class Layout extends React.Component{
	componentWillMount(){
		this.props.dispatch(fetchUser())
	}

	fetchTweets(){
		this.props.dispatch(fetchTweets())
	}
	render(){
		const {user,tweets} =this.props;
		if(!tweets.length){
			return <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>;
		}
		const mappedTweets=tweets.map(tweet=><li key={tweet.id}>{tweet.text}</li>)
		return <div>	
			<h1>{user.name}</h1>
			<ul>{mappedTweets}</ul>
		</div>;
	}
}