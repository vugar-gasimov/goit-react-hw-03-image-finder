import React from 'react';
import { ImageGallery } from './Image-finder/ImageGallery';
import { Searchbar } from './Image-finder/Searchbar';
import { Button } from './Image-finder/Button';
// import { Modal } from './Modal-window/Modal';
// import { Loader } from './Image-finder/Loader';
import { fetchPics } from '../Services/api';
import { toast } from 'react-toastify';

import {
  AppContainer,
  TitleContainer,
  ContentContainer,
  GalleryTitle,
} from './App.Styled';
import { INITIAL_STATE_POSTS } from './Image-finder/InitialState.js';
export class App extends React.Component {
  state = { ...INITIAL_STATE_POSTS };
  async componentDidMount() {
    this.getPhotos();
  }
  async componentDidUpdate(_, prevState) {
    const { per_page, page, q } = this.state;
    if (prevState.page !== page || q !== prevState.q) {
      this.getPhotos();
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + prevState.per_page }));
  };
  getPhotos = async () => {
    this.setState({ loading: true });
    const { per_page, page, q } = this.state;

    try {
      const response = await fetchPics({
        per_page,
        page,
        q,
      });
      this.setState(prevState => ({
        photos: [...prevState.photos, ...response.hits],
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message, loading: false });
      toast.error(error.message);
    }
  };
  handleSetQuery = q => {
    this.setState({ q, photos: [] });
  };
  render() {
    const { photos, q } = this.state;
    return (
      <AppContainer>
        <TitleContainer>React homework template</TitleContainer>
        <ContentContainer>
          <Searchbar setQuery={this.handleSetQuery} />
          {q && <GalleryTitle>Image Gallery search request: {q}</GalleryTitle>}

          <h2>{this.state.error}</h2>
          <ImageGallery photos={photos} />
          <Button onClick={this.handleLoadMore}>Load more</Button>
          {/* <Loader /> */}
          {/* <Modal /> */}
        </ContentContainer>
      </AppContainer>
    );
  }
}
