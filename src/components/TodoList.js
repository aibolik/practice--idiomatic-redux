import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => 
      <Todo {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
  </ul>
)

export default TodoList