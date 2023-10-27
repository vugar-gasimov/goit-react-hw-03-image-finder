import React from 'react';
import { toast } from 'react-toastify';
import { FcLike } from 'react-icons/fc';
import {
  StyledWrapper,
  RightCenterButton,
  LeftCenterButton,
  UnderPhotoButton,
  ImageContainer,
  StyledImage,
  Title,
  LikeButton,
  ImageInfo,
  DeleteButton,
} from './Modal.Styled';
import propTypes from 'prop-types';

export class Modal extends React.Component {
  intervalId = null;
  timeoutId = null;

  static propTypes = {
    close: propTypes.func.isRequired,
    selectedPhoto: propTypes.object.isRequired,
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
      toast.info('Modal closed by Escape');
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'visible';
  }

  handleClickOutside = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.close();
      toast.info('Modal closed by click on backdrop');
    }
  };

  render() {
    const { selectedPhoto, close } = this.props;

    return (
      <StyledWrapper onClick={this.handleClickOutside}>
        <RightCenterButton onClick={this.props.next}>→</RightCenterButton>
        <LeftCenterButton onClick={this.props.back}>←</LeftCenterButton>
        <UnderPhotoButton onClick={close}>✕</UnderPhotoButton>

        <div>
          <div>
            <ImageContainer>
              <StyledImage
                src={selectedPhoto.largeImageURL}
                alt={selectedPhoto.tags}
              />
              <ImageInfo>
                <Title>{selectedPhoto.tags}</Title>
                <LikeButton>
                  <FcLike />
                  {selectedPhoto.likes}
                </LikeButton>
                <DeleteButton>Delete</DeleteButton>
              </ImageInfo>
            </ImageContainer>
          </div>
        </div>
      </StyledWrapper>
    );
  }
}
