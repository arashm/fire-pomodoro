import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import Tock from 'tocktimer'
import moment from 'moment'

export default class Counter extends Component {
  constructor (props) {
    super(props)

    const { initialMinutes } = this.props

    this.state = {
      minutesLeft: initialMinutes || '25',
      secondsLeft: '00'
    }
  }

  componentDidMount () {
    const initialStartTime =
      `00:${this.state.minutesLeft}:${this.state.secondsLeft}`

    this._startTimer(initialStartTime)
  }

  componentWillUnmount () {
    if (!this.timer) return false

    this.timer.stop()
    this.timer = null
  }

  _startTimer (initialTime) {
    const timer = new Tock({
      countdown: true,
      interval: 1000,
      callback: () => {
        const currentTime = moment.utc(
          moment.duration(timer.lap()).asMilliseconds()
        )

        this.setState({
          minutesLeft: currentTime.format('mm'),
          secondsLeft: currentTime.format('ss')
        })
      }
    })

    this.timer = timer
    timer.start(initialTime)
  }

  render () {
    return (
      <div className='counter'>
        <span className='counter-minutes'>{ this.state.minutesLeft }</span>
        <span className='counter-colon'>:</span>
        <span className='counter-seconds'>{ this.state.secondsLeft }</span>
      </div>
    )
  }
}

Counter.propTypes = {
  initialMinutes: PropTypes.number
}
