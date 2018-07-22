import React, { Component } from 'react'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

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

let nextTodoId = 0
const TodoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo
      onAddClick={text => store.dispatch({
        type: 'ADD_TODO',
        text: text,
        id: nextTodoId++
      })}
    />
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={id =>
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      }
    />
    <Footer />
  </div>
)

export default TodoApp