import styled from 'styled-components';

export const ImageInfo = styled.div`
  text-align: center;

  display: flex;
  overflow: hidden;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  font-weight: 500;
  font-size: calc((1vw + 1vh) * 1.7);
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  background: none;
  border: none;
  cursor: grabbing;
  font-weight: bold;
  color: white;
  padding: 6px 12px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.9);
  }
`;

export const DeleteButton = styled.button`
  font-size: 16px;
  background: none;
  padding: 6px 12px;
  border: none;
  color: black;
  font-weight: bold;

  cursor: grabbing;
  background-color: white;
  border-radius: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.9);
  }
`;

export const TitleModal = styled.div`
  padding: 20px;
  text-align: center;
  height: 700px;
`;

export const ImageContainer = styled.div`
  padding: 3px 20px 3px;
  text-align: center;
  height: 700px;
`;

export const LeftCenterButton = styled.button`
  background-color: #3f51b5;
  border: none;
  border-radius: 50px;
  color: #fff;
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  position: absolute;
  left: 20px;
  top: 50%;
`;

// Button under the Photo
export const UnderPhotoButton = styled.button`
  background-color: #3f51b5;
  border: none;
  border-radius: 50px;
  color: #fff;
  padding: 10px 20px;
  display: block;
  position: absolute;
  right: 2%;
  top: 2%;
`;

// Right-Center Button
export const RightCenterButton = styled.button`
  background-color: #3f51b5;
  border: none;
  border-radius: 50px;
  color: #fff;
  padding: 10px 20px;
  font-size: large;
  font-weight: bolder;
  margin: 0 auto;
  display: block;
  position: absolute;
  right: 20px;
  top: 50%;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(95, 77, 209, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  z-index: 4;
  justify-content: space-between;
  flex-direction: column;
`;
export const StyledContent = styled.div`
  width: 800px;
  height: auto;

  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 0 10px;
  & div {
    height: 500px;
  }
  & button {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    margin-left: auto;
    display: block;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0 0 3px 1px black;
    }
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
`;
export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
