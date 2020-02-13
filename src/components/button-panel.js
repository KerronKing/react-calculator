import React from 'react';
import Button from './button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(buttonName) {
    
  }

  render() {
    return (
      <div>
        <div className="panel-row">
          <Button name="AC" color="white" onClick={this.handleClick} />
          <Button name="+/-" color="white" />
          <Button name="%" color="white" />
          <Button name="/" />
        </div>
        <div className="panel-row">
          <Button name="7" color="white" />
          <Button name="8" color="white" />
          <Button name="9" color="white" />
          <Button name="X" />
        </div>
        <div className="panel-row">
          <Button name="4" color="white" />
          <Button name="5" color="white" />
          <Button name="6" color="white" />
          <Button name="-" />
        </div>
        <div className="panel-row">
          <Button name="1" color="white" />
          <Button name="2" color="white" />
          <Button name="3" color="white" />
          <Button name="+" />
        </div>
        <div className="panel-row">
          <Button name="0" color="white" wide />
          <Button name="." color="white" />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
