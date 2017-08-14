import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import TodoList from './components/todo_list'
import TodoEntry from './components/todo_entry'
import './styles/style.scss'

class FirePomodoro extends React.Component {
  constructor (props) {
    super(props)

    this.addTodo = this.addTodo.bind(this)
    this.state = {
      todos: todos
    }
  }

  addTodo (todo) {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render () {
    return (
      <section className='container'>
        <div className='left-side'>
          <TodoEntry onAddTodo={this.addTodo} />
          <TodoList todos={this.state.todos} />
        </div>

        <div className='right-side'>
          <Counter />
        </div>
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
