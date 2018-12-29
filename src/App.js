import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './actions'
import './App.css';
import TodoContainer from './todoContainer';
import ShowTodo from './ShowTodo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    // const v = e.target.value;
    e.persist()
    this.setState(() => {
      return {
      text: e.target.value
      }
    })
  }
  render() {
    const { addTodo } = this.props
    return (
      <Fragment>
        <div>
          <h1>ToD.O</h1>
          <input type="text"  value={this.state.text} onChange={this.handleChange}/>
          <button onClick={()=>addTodo(this.state.text)}>Add</button>
        </div>
        <TodoContainer />
        <ShowTodo />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(App);
