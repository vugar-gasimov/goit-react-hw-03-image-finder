import React from 'react';
import { LoadmoreBtn } from './ImageFinder.Styled';
import PropTypes from 'prop-types';
export const LoadMoreButton = ({ loading, onClick }) => {
  return (
    <LoadmoreBtn onClick={onClick}>
      {!loading ? 'Load more' : 'Loading...'}
    </LoadmoreBtn>
  );
};

LoadMoreButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
