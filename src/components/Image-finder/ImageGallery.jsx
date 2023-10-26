import React from 'react';

import { ImageGalleryItem } from './ImageGalleryItem';
import { StyledList } from './ImageFinder.Styled';
export const ImageGallery = ({ photos = [] }) => {
  return (
    <StyledList>
      {photos.map(item => (
        <ImageGalleryItem key={item.id} {...item} />
      ))}
    </StyledList>
  );
};
