import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const getVisibleTodos = (todos, visibilityFilter) => {
  if (visibilityFilter === 'SHOW_ALL') {
    return todos
  }
  if (visibilityFilter === 'SHOW_COMPLETED') {
    return todos.filter(t => t.completed)
  }
  if (visibilityFilter === 'SHOW_ACTIVE') {
    return todos.filter(t => !t.completed)
  }
}

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => 
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
  </ul>
)

const mapStateToProps = state => (
  {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
)

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList