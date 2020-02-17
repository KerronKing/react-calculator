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
    let { total, next } = this.state;
    const { operation } = this.state;
    let obj;
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const syms = ['+', '-', 'X', '/', '%'];
    const decimalPoint = '.';

    const numClicked = nums.indexOf(buttonName) >= 0;
    const symClicked = syms.indexOf(buttonName) >= 0;
    const decClicked = buttonName === '.';
    const equalClicked = buttonName === '=';
    const resetClicked = buttonName === 'AC';
    const plusMinusClicked = buttonName === '+/-';

    if (!total && numClicked) {
      this.setState({ total: buttonName });
    } else if (total && plusMinusClicked) {
      this.setState({ total: `-${total}` });
    } else if (total && decClicked && total.indexOf(decimalPoint) === -1) {
      this.setState({ total: total += buttonName });
    } else if (total && next && decClicked && next.indexOf(decimalPoint) === -1) {
      this.setState({ next: next += buttonName });
    } else if (total && !operation && symClicked) {
      this.setState({ operation: buttonName });
    } else if (total && !operation && numClicked) {
      this.setState({ total: total += buttonName });
    } else if (total && (operation && operation !== '=') && !next && numClicked) {
      this.setState({ next: buttonName });
    } else if (total && operation && next && numClicked) {
      this.setState({ next: next += buttonName });
    } else if (total && operation && (!next || next) && equalClicked) {
      obj = method.calculate(this.state, operation);
      this.setState({
        total: obj.total,
        next: obj.next,
        operation: obj.operation,
      });
    } else if (resetClicked) {
      this.setState({
        total: null,
        next: null,
        operation: null,
      });
    } else if (operation === '=' && numClicked) {
      this.setState({
        total: buttonName,
        operation: null,
      });
    }
    console.log(this.state);
  }

  render() {
    const { total } = this.state;
    return (
      <div id="app">
        <Display result={total} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
