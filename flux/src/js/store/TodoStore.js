import {EventEmitter} from 'events';
import dispatcher from '../dispatcher'
class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos=[
			{
				id:1234567,
				text:"Close the door",
				complete:false
			},
			{
				id:8637535,
				text:"Go shoping",
				complete:false
			}
		];
	}

	getAll(){
		return this.todos;
	}

	createTodo(text){
		const id=Date.now();
		this.todos.push({
			id,
			text,
			complete:false,

		});
		this.emit("change");
	}
	clearTask(id){
		for (var todo of this.todos){
			if(todo.id==id){
				todo.complete=true;
			}
		}
		this.emit("change");
	}
	handleAction(action){
		console.log("Recieved action:",action);
		switch(action.type){
			case "CRTD":{
				this.createTodo(action.text);
			}
			case "DELTD":{
				this.clearTask(action.id);
			}
		}
	}
}

const todoStore =new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;