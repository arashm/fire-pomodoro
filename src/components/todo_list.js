import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'
import TodoEntry from './todo_entry'

export default class TodoList extends React.Component {
  todoElements () {
    const todoElements = this.props.todos.map(function (todo) {
      return <Todo key={todo.id} todo={todo} />
    })

    return todoElements
  }

  render () {
    return (
      <section className='todo-list'>
        <TodoEntry />
        { this.todoElements() }
      </section>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
}
