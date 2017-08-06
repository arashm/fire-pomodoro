import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import './styles/style.scss';

class FirePomodoro extends React.Component {
  render() {
    return (
      <section className='container'>
        <Counter />
      </section>
    );
  }
}

const firePomodoro = ReactDOM.render(
  <FirePomodoro/>, document.getElementById('app')
);
