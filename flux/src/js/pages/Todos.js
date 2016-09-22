import React from 'react';
import Todo from '../components/Todo'
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../store/TodoStore'
export default class Todos extends React.Component{
	constructor(){
		super();
		this.state={todos:TodoStore.getAll()};
	}
	componentWillMount(){
		TodoStore.on("change",()=>{
			this.setState({
				todos:TodoStore.getAll(),
			});	
		});
	}
	createTodo(e){
		if(e.key=='Enter'){
			TodoActions.createTodo(e.target.value);
			e.target.value="";
		}
	}
	render(){
		const {todos}=this.state;
		const TodosComponents=todos.map((todo)=>{
			return <Todo key={todo.id} id={todo.id} complete={todo.complete} text={todo.text} />;
		});
		return (
			<div>
				<h1>To to</h1>
				<input placeholder="Enter task" onKeyPress={this.createTodo.bind(this)} />
				<ul>{TodosComponents}</ul>
			</div>
		);
	}
}