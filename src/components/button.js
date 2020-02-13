import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;
  const classes = color === 'white' && wide ? 'white wide' : color;
  return (
    <div className={classes}>{name}</div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
