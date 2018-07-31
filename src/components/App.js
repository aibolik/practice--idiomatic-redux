import React from 'react'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'
import AddTodo from './AddTodo'

const TodoApp = ({ match: { params: { filter } } }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={filter || 'all'} />
    <Footer />
  </div>
)

export default TodoApp