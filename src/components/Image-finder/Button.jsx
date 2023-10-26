import React from 'react';
import { LoadmoreBtn } from './ImageFinder.Styled';
export const Button = ({ children, onClick }) => {
  return (
    <LoadmoreBtn onClick={onClick} type="button">
      {children}
    </LoadmoreBtn>
  );
};
