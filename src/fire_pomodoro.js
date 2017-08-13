import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import TodoList from './components/todo_list'
import './styles/style.scss'

class FirePomodoro extends React.Component {
  render () {
    return (
      <section className='container'>
        <TodoList todos={todos} />
        <Counter />
      </section>
    )
  }
}

const todos = [
  {
    id: 1,
    value: 'This is a test',
    running: false
  },
  {
    id: 2,
    value: 'Arash test',
    running: true
  }
]

ReactDOM.render(<FirePomodoro/>, document.getElementById('app'))
