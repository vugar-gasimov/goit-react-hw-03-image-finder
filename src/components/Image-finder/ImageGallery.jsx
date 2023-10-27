import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes, not propTypes
import { ImageGalleryItem } from './ImageGalleryItem';
import { StyledList } from './ImageFinder.Styled';

export const ImageGallery = ({ photos = [], toggleModal }) => {
  return (
    <StyledList>
      {photos.map(item => (
        <ImageGalleryItem
          key={item.id}
          {...item}
          toggleModal={() => toggleModal(item)}
        />
      ))}
    </StyledList>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
