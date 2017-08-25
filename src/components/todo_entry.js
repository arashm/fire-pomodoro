import { h, Component } from 'preact'
import PropTypes from 'prop-types'

export default class TodoEntry extends Component {
  constructor (props) {
    super(props)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
  }

  handleOnKeyDown (event) {
    if (event.which === 13) {
      const todo = { value: event.target.value, running: false }
      this.props.onAddTodo(todo)
    }
  }

  render () {
    return (
      <div className='todo-entry'>
        <input type='text' onKeyDown={this.handleOnKeyDown} />
      </div>
    )
  }
}

TodoEntry.propTypes = {
  onAddTodo: PropTypes.function
}
