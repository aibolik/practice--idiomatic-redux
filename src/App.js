import React, { Component } from 'react'
import TodoList from './components/TodoList'
import FilterLink from './components/FIlterLink'

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
class TodoApp extends Component {
  
  render() {
    const { todos, visibilityFilter, store } = this.props
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)
    return (
      <div>
        <input ref={node => this.input = node} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
          this.input.value = ''
        }}>
          Add Todo
        </button>
        <TodoList 
          todos={visibleTodos} 
          onTodoClick={id => 
              store.dispatch({
                type: 'TOGGLE_TODO',
                id
              })
          }
        />
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
            store={store}
          >
            All, 
          </FilterLink>
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
            store={store}
          >
            Active, 
          </FilterLink>
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
            store={store}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}

export default TodoApp