const redux = require('redux')

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const visibilityFitler = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const { createStore, combineReducers } = redux
const todoApp = combineReducers({
  todos,
  visibilityFitler
})
const store = createStore(todoApp)

console.log('Initial state:\n', store.getState(), '\n----------')
console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn redux'
})
console.log('Current state:\n', store.getState(), '\n----------')

console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Do something'
})
console.log('Current state:\n', store.getState(), '\n----------')

console.log('Dispatching TOGGLE_TODO')
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1
})
console.log('Current state:\n', store.getState(), '\n----------')

console.log('Dispatching SET_VISIBILITY_FILTER')
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
console.log('Current state:\n', store.getState(), '\n----------')