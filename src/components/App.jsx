import React from 'react';
import { ImageGallery } from './Image-finder/ImageGallery';
import { Searchbar } from './Image-finder/Searchbar';
import { LoadMoreButton } from './Image-finder/Button';
import { Modal } from './Modal-window/Modal';

import { fetchPics } from '../Services/api';
import { toast } from 'react-toastify';
import { Blocks } from 'react-loader-spinner';
import {
  AppContainer,
  TitleContainer,
  ContentContainer,
  GalleryTitle,
  LoaderContainer,
} from './App.Styled';
import { INITIAL_STATE_POSTS } from './Image-finder/InitialState.js';
export class App extends React.Component {
  state = { ...INITIAL_STATE_POSTS };
  async componentDidMount() {
    this.getPhotos();
    toast.info('Welcome');
  }

  async componentDidUpdate(_, prevState) {
    const { page, q } = this.state;
    if (prevState.page !== page || q !== prevState.q) {
      this.setState({ loading: true }, () => {
        this.getPhotos();
        toast.info('Nice photos ha');
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getPhotos = async () => {
    const { per_page, page, q } = this.state;
    this.setState({ loading: true });

    try {
      const response = await fetchPics({
        per_page,
        page,
        q,
      });
      if (response.total === undefined || response.total <= 0) {
        this.setState({
          error: 'Total count is missing or invalid',
          loading: false,
        });
        toast.error('Total count is missing or invalid');
        return;
      }
      this.setState(prevState => ({
        photos: [...prevState.photos, ...response.hits],
        total: response.total,
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message);
    } finally {
      this.setState({ loading: false });
    }
  };
  handleSetQuery = q => {
    this.setState({ q, photos: [], total: null });
  };
  toggleModal = photo => {
    this.setState(prevState => {
      const isOpened = !prevState.isOpened;
      if (isOpened) {
        toast.success('Wow what a beauty 😁');
      } else {
        toast.success("Let's choose another photo 😁");
      }
      return {
        isOpened,
        currentPhotoIndex: prevState.photos.indexOf(photo),
      };
    });
  };

  handleLikes = photo => {
    this.setState(prevState => ({
      photos: prevState.photos.map(el =>
        el.id === photo.id ? { ...el, likes: el.likes + 1 } : el
      ),
    }));
  };
  handleNext = () => {
    const { currentPhotoIndex, photos } = this.state;

    // Check if photos is an array and not undefined
    if (Array.isArray(photos) && photos.length > 0) {
      this.setState({
        currentPhotoIndex: (currentPhotoIndex + 1) % photos.length,
      });
    } else {
      console.error('No photos or invalid photos array!');
    }
  };
  handleBack = () => {
    const { currentPhotoIndex, photos } = this.state;

    // Check if photos is an array and not undefined
    if (Array.isArray(photos) && photos.length > 0) {
      this.setState({
        currentPhotoIndex: (currentPhotoIndex - 1) % photos.length,
      });
    } else {
      console.error('No photos or invalid photos array!');
    }
  };
  render() {
    const { photos, q, total, loading, isOpened, currentPhotoIndex } =
      this.state;
    const selectedPhoto = photos[currentPhotoIndex];

    return (
      <AppContainer>
        <TitleContainer>React homework template</TitleContainer>
        <ContentContainer>
          <Searchbar setQuery={this.handleSetQuery} />
          {q && (
            <GalleryTitle>
              Image Gallery search request: {q} and results: {total}
            </GalleryTitle>
          )}
          <h2>{this.state.error}</h2>
          {loading && !photos.length ? (
            <LoaderContainer>
              <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
              />
            </LoaderContainer>
          ) : (
            <ImageGallery
              photos={photos}
              handleLikes={this.handleLikes}
              toggleModal={this.toggleModal}
            />
          )}
          {total > photos.length ? (
            <LoadMoreButton loading={loading} onClick={this.handleLoadMore} />
          ) : null}
          {isOpened && selectedPhoto ? (
            <Modal
              close={this.toggleModal}
              selectedPhoto={selectedPhoto}
              next={this.handleNext}
              back={this.handleBack}
              changePhoto={index => this.setState({ currentPhotoIndex: index })}
            />
          ) : null}
        </ContentContainer>
      </AppContainer>
    );
  }
}
