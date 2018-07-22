import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createStore, { todoAppReducer } from './reducers/todos'
import { Provider } from 'react-redux'

const root = document.getElementsByTagName('main')[0]

ReactDOM.render(
  <Provider store={createStore(todoAppReducer)}>
    <App />
  </Provider>,
  root
)