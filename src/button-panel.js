import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <div name={name}>{name}</div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
