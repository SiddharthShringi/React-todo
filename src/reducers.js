import { combineReducers } from 'redux'



var count = 0;
const initialState = {
	visibilityFilter: 'SHOW_ALL',
	todos: []
}

function todoList(state = initialState.todos, action) {
	console.log(state, action)
	switch (action.type) {
		case "ADD_TODO":
			return [...state, { text: action.text, complete: false, id: ++count }]
		case "TOGGLE_TODO":
			return state.map(todo => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)
		case "REMOVE_TODO":
			return state.filter(todo => (todo.id !== action.id))
		default:
			return state
	}
}


function visibilityFilter(state = initialState.visibilityFilter, action) {
	switch (action.type) {
		case "	":
			return action.filter
		default:
			return state
	}
}


// export default function rootReducer(state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(initialState.visibilityFilter, action),
// 		todos: todoList(initialState.todos, action)
// 	}
// }

export default combineReducers({
	visibilityFilter,
	todos: todoList
})