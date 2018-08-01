import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router'
import TodoList from './TodoList'
import { getVisibleTodos } from '../reducers'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }

  render() {
    const { toggleTodo, ...rest } = this.props
    return (
      <TodoList 
        {...rest} 
        onTodoClick={toggleTodo} 
      />
    )
  }
}

const mapStateToProps = (state, { match: { params: { filter } } }) => ({
  todos: getVisibleTodos(state, filter || 'all'),
  filter: filter || 'all'
})

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList