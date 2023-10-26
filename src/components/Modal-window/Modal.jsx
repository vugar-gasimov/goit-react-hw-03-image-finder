import React from 'react';
import { toast } from 'react-toastify/dist/components';
export class Modal extends React.Component {
  intervalId = null;
  timeoutId = null;
  componentDidMount() {
    console.log('Modal is open');
  }
  componentWillUnmount() {
    console.log('Modal is closed');
  }
  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
