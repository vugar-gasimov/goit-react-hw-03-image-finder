import React from 'react';
import { FcLike } from 'react-icons/fc';
import {
  GalleryItem,
  ImageContainer,
  Image,
  ImageInfo,
  Title,
  LikeButton,
  DeleteButton,
} from './ImageFinder.Styled';
export const ImageGalleryItem = ({ photo, title, likes }) => {
  return (
    <GalleryItem>
      <div>
        <ImageContainer>
          <Image src={photo} alt={title} />
        </ImageContainer>

        <ImageInfo>
          <Title>{title}</Title>
          <LikeButton>
            <FcLike />
            {likes}
          </LikeButton>
          <DeleteButton>Delete</DeleteButton>
        </ImageInfo>
      </div>
    </GalleryItem>
  );
};
