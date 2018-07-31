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

export default todos


export const getVisibleTodos = (state, visibilityFilter) => {
  if (visibilityFilter === 'all') {
    return state
  }
  if (visibilityFilter === 'completed') {
    return state.filter(t => t.completed)
  }
  if (visibilityFilter === 'active') {
    return state.filter(t => !t.completed)
  }
}