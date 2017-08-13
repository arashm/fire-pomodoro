import React from 'react'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
  constructor (props) {
    super(props)

    const { running } = this.props.todo

    this.state = {
      running: running || false
    }
  }

  render () {
    const { value, running } = this.props.todo

    return (
      <div className={ `todo ${running ? 'running' : ''}` }>
        <span className='todo-text'>{ value }</span>
        <button className='runPomodoro'></button>
      </div>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object
}
