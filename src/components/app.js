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
    const { total, next, operation } = this.state;
    let obj;

    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const syms = ['AC', '+', '-', 'X', '/', '.', '%'];
    const equal = '=';

    if (total === null && nums.indexOf(buttonName) >= 0) {
      this.setState({ total: buttonName });
    } else if (total !== null
      && operation === null
      && syms.indexOf(buttonName) >= 0) {
      this.setState({ operation: buttonName });
    } else if (total !== null
      && operation !== null
      && next === null
      && nums.indexOf(buttonName) >= 0) {
      this.setState({ next: buttonName });
    } else if (total !== null
      && operation !== null
      && next !== null
      && buttonName === equal) {
      obj = method.calculate(this.state, buttonName);
      this.setState({
        total: obj.total,
        next: obj.next,
        operation: buttonName,
      });
    }
  }

  render() {
    const { total } = this.state;
    return (
      <div id="app">
        <Display result={total} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
