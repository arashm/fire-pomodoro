import { h, render, Component } from 'preact'
import PropTypes from 'prop-types'

export default class Todo extends Component {
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
        <div className='button-group'>
          <div className='button icon-bin'></div>
          <div className='button icon-play3'></div>
        </div>
      </div>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object
}
