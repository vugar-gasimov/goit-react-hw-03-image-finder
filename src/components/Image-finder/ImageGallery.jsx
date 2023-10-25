import React from 'react';

import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ photos = [] }) => {
  return (
    <ul className="gallery">
      {photos.map(item => (
        <ImageGalleryItem
          key={item.id}
          photo={item.webformatURL}
          title={item.tags}
          likes={item.likes}
          {...item}
        />
      ))}
    </ul>
  );
};
