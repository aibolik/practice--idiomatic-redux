import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router'
import TodoList from './TodoList'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError'

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
    const { toggleTodo, todos, errorMessage, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <div>Loading...</div>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params: { filter } } }) => {
  filter = filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter: filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList