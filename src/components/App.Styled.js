import styled, { keyframes } from 'styled-components';

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

export const fromLeftAnimation = keyframes`
  0% {
    z-index: 20;
    opacity: 0;
    transform: translate(-20px, -6px);
  }
  
`;

export const fromRightAnimation = keyframes`
  0% {
    z-index: 20;
    opacity: 0;
    transform: translate(20px, -6px);
  }
  
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  position: relative;
  opacity: 0;
  left: 10px;
`;

export const SideLeft = styled.div`
  position: absolute;
  background-color: #286cb5;
  width: 19px;
  height: 5px;
  transform: skew(0deg, -25deg);
  top: 14px;
  left: 10px;
`;

export const SideRight = styled.div`
  position: absolute;
  background-color: #2f85e0;
  width: 19px;
  height: 5px;
  transform: skew(0deg, 25deg);
  top: 14px;
  left: -9px;
`;

export const SideTop = styled.div`
  position: absolute;
  background-color: #5fa8f5;
  width: 20px;
  height: 20px;
  transform: skew(-20deg, -20deg) rotate(45deg);
`;

export const Box1 = styled(Box)`
  animation: ${fromLeftAnimation} 4s infinite;
`;

export const Box2 = styled(Box)`
  animation: ${fromRightAnimation} 4s infinite;
  animation-delay: 1s;
`;

export const Box3 = styled(Box)`
  animation: ${fromLeftAnimation} 4s infinite;
  animation-delay: 2s;
`;

export const Box4 = styled(Box)`
  animation: ${fromRightAnimation} 4s infinite;
  animation-delay: 3s;
`;
