import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import Todo from './todo'

export default class TodoList extends Component {
  todoElements () {
    const todoElements = this.props.todos.map(function (todo) {
      return <Todo key={todo.id} todo={todo} />
    })

    return todoElements
  }

  render () {
    return (
      <section className='todo-list'>
        { this.todoElements() }
      </section>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
}
