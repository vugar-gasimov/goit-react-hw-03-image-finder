import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #3f51b5;
  text-align: center;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  font-size: 24px;
  color: white;
  margin: 20px 0;
`;
export const GalleryTitle = styled.h1`
  font-size: 24px;
  color: #3f51b5;
  margin: 20px 0;
`;

export const ContentContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
// ==================================================================
export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
