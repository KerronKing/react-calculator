import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.namePass = this.namePass.bind(this);
  }

  // namePass(e) {
  //   const name = e.target.name;
  //   this.props.handleClick(name);
  // }

  render() {
    const { name, color, wide } = this.props;
    const classes = color === 'white' && wide ? 'white wide' : color;
    return (
      <div className={classes}>{name}</div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  // handleClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
