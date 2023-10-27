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
import propTypes from 'prop-types';
export const ImageGalleryItem = ({
  webformatURL,
  tags,
  likes,
  toggleModal,
}) => {
  return (
    <GalleryItem onClick={toggleModal}>
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

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
};
