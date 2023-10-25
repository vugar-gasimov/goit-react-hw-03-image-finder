import styled from 'styled-components';

// Styled component for Searchbar
export const SearchbarHeader = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

// Styled component for SearchForm
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

// Styled component for SearchForm button
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

// Styled component for SearchForm button label (hidden)
export const SearchFormButtonLabel = styled.label`
  /* position: absolute; */
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  /* clip-path: inset(50%); */
  border: 0;
`;

// Styled component for SearchForm input
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
// ========================================================
export const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  max-width: 90%;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 20px;
`;
// ========================================================

export const GalleryItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  border: 2px solid;
  padding: 10px 14px;
  box-shadow: 2px 2px 5px 1px gray;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  flex-direction: column;
  height: 400px;
  align-items: center;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ImageInfo = styled.div`
  text-align: center;
  margin-top: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  overflow: hidden;
  flex-direction: column;
  height: 120px;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 4px 0;
  font-weight: bold;
  font-size: calc((1vw + 1vh) * 1.7);
  margin-bottom: 0px;
  border-bottom: 2px solid;
  padding-bottom: 2px;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`;

export const DeleteButton = styled.button`
  font-size: 16px;
  background: none;
  border: none;
  color: #ff5733;
  cursor: pointer;
`;

// ====================================================================================
