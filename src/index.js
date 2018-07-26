import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()

const store = createStore(todoApp, persistedState)
const root = document.getElementsByTagName('main')[0]

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)