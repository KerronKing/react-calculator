import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  let { result } = props;
  if (!result) result = '0';
  return (
    <div id="display">
      <span>{result}</span>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
