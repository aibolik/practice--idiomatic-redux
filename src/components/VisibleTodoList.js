import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from './TodoList'

const getVisibleTodos = (todos, visibilityFilter) => {
  if (visibilityFilter === 'all') {
    return todos
  }
  if (visibilityFilter === 'completed') {
    return todos.filter(t => t.completed)
  }
  if (visibilityFilter === 'active') {
    return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log('visible todos', ownProps)
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter)
  }
}

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList