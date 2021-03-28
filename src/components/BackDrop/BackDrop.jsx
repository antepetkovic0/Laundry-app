import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { closeDrawer } from '../../actions/sideDrawer';

import { Wrapper } from './style';

const BackDrop = () => {
  const dispatch = useDispatch();

  const handleBackDropClick = () => {
    dispatch(closeDrawer());
  };

  return (
    <Wrapper onClick={handleBackDropClick} />
  )
};

// Wrapper.propTypes = {
//   handleBackDropClick: PropTypes.func.isRequired
// };

export default BackDrop;
