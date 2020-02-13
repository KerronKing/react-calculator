import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import method from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { state } = this.state;
    const obj = method.calculate(state, buttonName);
    this.setState({
      total: obj.total,
      next: obj.next,
      operation: buttonName,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="app">
        <Display result={total} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
