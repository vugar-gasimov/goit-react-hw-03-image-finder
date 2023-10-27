import React from 'react';
import { LoadmoreBtn } from './ImageFinder.Styled';
import PropTypes from 'prop-types';
export const Button = ({ loading, onClick }) => {
  return (
    <LoadmoreBtn onClick={onClick} type="button">
      {!loading ? 'Load more' : 'Loading...'}
    </LoadmoreBtn>
  );
};

Button.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
