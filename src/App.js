import React, { Component } from 'react'
import TodoList from './components/TodoList'

let nextTodoId = 0
class TodoApp extends Component {
  
  render() {
    const { todos, visibilityFilter, store } = this.props
    return (
      <div>
        <input ref={node => this.input = node} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
        }}>
          Add Todo
        </button>
        <TodoList todos={todos} visibilityFilter={visibilityFilter} />
      </div>
    )
  }
}

export default TodoApp