import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from './actions'

function Todo(props) {
    const {todo, toggleTodo, removeTodo} = props;
    // console.log(todo, toggleTodo, todo.complete)
    return (
        <div className="todo" id={todo.id}>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo.id)} />
            <p>{todo.text}</p>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
    )
}

const mapDispatchToProps = {
    toggleTodo,
    removeTodo
  }
  
  export default connect(null, mapDispatchToProps)(Todo);