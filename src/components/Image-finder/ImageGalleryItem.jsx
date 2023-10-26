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
import { cutText } from '../../helpers/cutText';
export const ImageGalleryItem = ({ photo, title, likes }) => {
  return (
    <GalleryItem>
      <div>
        <ImageContainer>
          <Image src={photo} alt={title} />
        </ImageContainer>
        <Title>{cutText(title)}</Title>
        <ImageInfo>
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
