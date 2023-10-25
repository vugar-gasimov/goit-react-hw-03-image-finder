import React, { Component } from 'react';
import { fetchPics } from '../../Services/api';
export default class ImageGallery extends Component {
  state = {
    loading: false,
    error: null,
    images: [],
  };
  async componentDidMount() {
    const { images } = await fetchPics();
    console.log(images);
    fetchPics();
  }
  render() {
    return (
      <ul className="gallery">
        {/* <! -- Set <li>
  with images --> */}
      </ul>
    );
  }
}
