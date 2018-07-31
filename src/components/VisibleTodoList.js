import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { withRouter } from 'react-router'
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

const mapStateToProps = (state, { match: { params: { filter } } }) => ({
  todos: getVisibleTodos(state.todos, filter || 'all')
})

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList))

export default VisibleTodoList