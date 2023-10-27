import React from 'react';
import { toast } from 'react-toastify';
import { FcLike } from 'react-icons/fc';
import {
  Image,
  Title,
  LikeButton,
  DeleteButton,
} from '../Image-finder/ImageFinder.Styled';
import propTypes from 'prop-types';

export class Modal extends React.Component {
  intervalId = null;
  timeoutId = null;

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
      <div onClick={this.handleClickOutside}>
        <div>
          <button onClick={close}>✕</button>
          <h1>Welcome to Modal 😁</h1>
          <div>
            <div>
              <div>
                <Image
                  src={selectedPhoto.largeImageURL}
                  width={700}
                  height={700}
                  alt={selectedPhoto.tags}
                />
              </div>
              <Title>{selectedPhoto.tags}</Title>
              <div>
                <LikeButton>
                  <FcLike />
                  {selectedPhoto.likes}
                </LikeButton>
                <DeleteButton>Delete</DeleteButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    close: propTypes.func.isRequired,
    selectedPhoto: propTypes.object.isRequired,
  };
}
