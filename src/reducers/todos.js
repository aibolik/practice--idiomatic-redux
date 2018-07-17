// import deepFreeze from 'deep-freeze'
// import expect from 'expect'
const deepFreeze = require('deep-freeze')
const expect = require('expect')

const todos = (state = [], action) => {

}

const testAddTodo = () => {
  const stateBefore = []
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter)
}

testAddTodo()

console.log('All tests have passed')