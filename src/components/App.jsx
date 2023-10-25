import React from 'react';
import { ImageGallery } from './Image-finder/ImageGallery';
import { Searchbar } from './Image-finder/Searchbar';
import { Button } from './Image-finder/Button';
// import { Modal } from './Modal-window/Modal';
// import { Loader } from './Image-finder/Loader';
import { fetchPics } from '../Services/api';
import { toast } from 'react-toastify';

export class App extends React.Component {
  state = {
    loading: false,
    error: null,
    photos: [],
    isOpen: false,
    total: null,
    selectedPhoto: null,
    page: 1,
    per_page: 12,
    type_photo: 'photo',
    orientation: 'horizontal',
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const response = await fetchPics();
      console.log(response);
      this.setState({ photos: response.hits });
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { photos } = this.state;
    return (
      <div>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework template
        </div>
        <div>
          <Searchbar />
          <h1>Image Gallery</h1>
          <h2>{this.state.error}</h2>
          <ImageGallery photos={photos} />
          <Button />
          {/* <Loader />
          <Modal /> */}
        </div>
      </div>
    );
  }
}
