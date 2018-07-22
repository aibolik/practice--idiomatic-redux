import React, { Component } from 'react'
import VisibleTodoList from './components/TodoList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp