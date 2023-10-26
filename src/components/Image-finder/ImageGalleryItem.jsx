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
export const ImageGalleryItem = ({ webformatURL, tags, likes }) => {
  return (
    <GalleryItem>
      <div>
        <ImageContainer>
          <Image src={webformatURL} alt={tags} />
        </ImageContainer>
        <Title>{cutText(tags)}</Title>
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
