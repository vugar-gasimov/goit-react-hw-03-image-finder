import React, { Component } from 'react';
import ImageGalery from './Image-finder/ImageGallery';

export class App extends Component {
  render() {
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
          <ImageGalery />
        </div>
      </div>
    );
  }
}
