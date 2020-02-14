import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.namePass = this.namePass.bind(this);
  }

  namePass(e) {
    const { name } = e.target;
    const { passInfo } = this.props;
    // console.log('clicked');
    passInfo(name);
  }

  render() {
    const { name, color, wide } = this.props;
    const classes = color === 'white' && wide ? 'white wide' : color;
    return (
      <div
        className={classes}
        onClick={this.namePass}
        onKeyPress={this.namePass}
        role="button"
        tabIndex="-1"
      >
        {name}
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  passInfo: PropTypes.func.isRequired,
};
Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
