import { v4 } from 'node-uuid'

const fakeDatabase = [
  {
    id: v4(),
    text: 'Revise Redux',
    completed: true
  },
  {
    id: v4(),
    text: 'Learn GatsbyJS',
    completed: false
  },
  {
    id: v4(),
    text: 'Learn GraphQL',
    completed: false
  },
  {
    id: v4(),
    text: 'Create website',
    completed: false
  },
]

const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const fetchTodos = (filter) => {
  return delay(500).then(() => {

    switch (filter) {
      case 'all':
        return fakeDatabase
      case 'active':
        return fakeDatabase.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
}

export const addTodo = (text) => {
  return delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    }

    fakeDatabase.push(todo)
    return todo
  })
}

export const toggleTodo = (id) => {
  return delay(500).then(() => {
    const todo = fakeDatabase.filter(todo => todo.id === id)[0]
    todo.completed = !todo.completed
    return todo
  })
}