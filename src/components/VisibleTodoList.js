import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { withRouter } from 'react-router'
import TodoList from './TodoList'
import { getVisibleTodos } from '../reducers'
import { fetchTodos } from '../api'

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos => {
      console.log(this.props.filter, todos)
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos => {
        console.log(this.props.filter, todos)
      })
    }
  }

  render() {
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, { match: { params: { filter } } }) => ({
  todos: getVisibleTodos(state, filter || 'all'),
  filter: filter || 'all'
})

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(VisibleTodoList))

export default VisibleTodoList