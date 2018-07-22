import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createStore, { todoAppReducer } from './reducers/todos'

window.store = createStore(todoAppReducer)
const root = document.getElementsByTagName('main')[0]

const render = () => {
  ReactDOM.render(
    <App {...store.getState()} />,
    root
  )
}

store.subscribe(() => render())
render()