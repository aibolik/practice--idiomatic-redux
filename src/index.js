import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createStore, { todoAppReducer } from './reducers/todos'
import PropTypes from 'prop-types'

const root = document.getElementsByTagName('main')[0]

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render () {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: PropTypes.object
}

ReactDOM.render(
  <Provider store={createStore(todoAppReducer)}>
    <App />
  </Provider>,
  root
)