import React, { Component } from 'react'
import VisibleTodoList from './components/TodoList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
)

export default TodoApp