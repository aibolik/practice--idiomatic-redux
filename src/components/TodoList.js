import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

/**
 * Actually this is Container component,
 * so it should be inside another folder
 */
class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const { store } = this.context
    const state = store.getState()

    return (
      <TodoList
        todos={
          getVisibleTodos(state.todos, state.visibilityFilter)
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    )
  }
}
VisibleTodoList.contextTypes = {
  store: PropTypes.object
}

export default VisibleTodoList