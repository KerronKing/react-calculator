import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.passInfo = this.passInfo.bind(this);
  }

  passInfo(buttonName) {
    const { handleClick } = this.props;
    handleClick(buttonName);
  }

  render() {
    return (
      <div>
        <div className="panel-row">
          <Button name="AC" color="white" onClick={this.passInfo} />
          <Button name="+/-" color="white" onClick={this.passInfo} />
          <Button name="%" color="white" onClick={this.passInfo} />
          <Button name="/" onClick={this.passInfo} />
        </div>
        <div className="panel-row">
          <Button name="7" color="white" onClick={this.passInfo} />
          <Button name="8" color="white" onClick={this.passInfo} />
          <Button name="9" color="white" onClick={this.passInfo} />
          <Button name="X" />
        </div>
        <div className="panel-row">
          <Button name="4" color="white" onClick={this.passInfo} />
          <Button name="5" color="white" onClick={this.passInfo} />
          <Button name="6" color="white" onClick={this.passInfo} />
          <Button name="-" onClick={this.passInfo} />
        </div>
        <div className="panel-row">
          <Button name="1" color="white" onClick={this.passInfo} />
          <Button name="2" color="white" onClick={this.passInfo} />
          <Button name="3" color="white" onClick={this.passInfo} />
          <Button name="+" />
        </div>
        <div className="panel-row">
          <Button name="0" color="white" wide onClick={this.passInfo} />
          <Button name="." color="white" onClick={this.passInfo} />
          <Button name="=" onClick={this.passInfo} />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
