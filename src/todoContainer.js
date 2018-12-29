import React from 'react'
import Todo from './todo.js'
import { connect } from 'react-redux'

function TodoContainer(props) {
    let { todos, visibilityFilter } = props
    let todoItems;
    switch(visibilityFilter) {
        case "SHOW_ALL":
            todoItems = todos;
            break;
        case "SHOW_COMPLETED":
            todoItems = todos.filter(todo => todo.complete)
            break;
        case "SHOW_ACTIVE":
            todoItems = todos.filter(todo => !todo.complete)
            break;
        default:
            todoItems = todos
    }
    let filterTodo = todoItems.map((value, index) => {
        return <Todo key={index} todo={value} />
    })
    return (
        <div className="todoContainer">
            {filterTodo}
        </div>
    )
}

const mapStatesToProps = (state) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(mapStatesToProps)(TodoContainer)