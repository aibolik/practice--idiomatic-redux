import { v4 } from 'node-uuid'
import { resolve } from 'upath';

const fakeDatabase = {
  todos: [
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
}

const delay = (ms) => 
  new Promise((resolve) => setTimeout(resolve, ms))

export const fetchTodos = (filter) => {
  return delay(1000).then(() => {
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