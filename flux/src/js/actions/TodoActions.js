import dispatcher from '../dispatcher';

export function createTodo(text){
	dispatcher.dispatch({
		type:"CRTD",
		text,
	});
}

export function clearTask(id){
	dispatcher.dispatch({
		type:"DELTD",
		id
	});
}