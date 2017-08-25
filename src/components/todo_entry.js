import { h, render, Component } from 'preact'

export default class TodoEntry extends Component {
  constructor (props) {
    super(props)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
  }

  handleOnKeyDown (event) {
    if (event.which === 13) {
      console.log(this.props, this.props.onAddTodo)
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
