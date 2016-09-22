import React from 'react';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../store/TodoStore'
export default class Todo extends React.Component{
	constructor(props){
		super();
	}
	clearTask(){
		TodoStore.clearTask(this.props.id);
	}
	render(){
		const key=this.props.id;
		const complete=this.props.complete;
		const text=this.props.text;
		const icon=complete?"\u2714":"\u2716";
		const styleCSS={"marginLeft":"20px"}
		return(
			<li>
				<input type="radio" onChange={this.clearTask.bind(this)} style={complete?{display:'none'}:null} />
				<span style={complete?{color:'green'}:null}>{text}</span><span style={styleCSS}>{icon}</span>
			</li>
		);
	}
}