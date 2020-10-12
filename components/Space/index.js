import PropTypes from 'prop-types';
import React from 'react';

const Space = ({size}) => {
  const unit = 8;
  return <div style={{marginTop: size * unit}} />
};

Space.propTypes = {
  size: PropTypes.number
}