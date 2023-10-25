import React from 'react';
import { FcLike } from 'react-icons/fc';
export const ImageGalleryItem = ({ photo, title, likes }) => {
  return (
    <li className="gallery-item">
      <img src={photo} alt={title} />
      <div>
        <p>{title}</p>
        <button>
          <FcLike />
          {likes}
        </button>
      </div>
    </li>
  );
};
