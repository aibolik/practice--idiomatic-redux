import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import todoApp from './reducers'

const store = createStore(todoApp, persistedState)
const root = document.getElementsByTagName('main')[0]

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)