import React from 'react';
import ReactDOM from 'react-dom';

class FirePomodoro extends React.Component {
  render() {
    return (
      <div>
        <h1>This is a test.</h1>
      </div>
    );
  }
}

const firePomodoro = ReactDOM.render(
  <FirePomodoro/>, document.getElementById('app')
);
