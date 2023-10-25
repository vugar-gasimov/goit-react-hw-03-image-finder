import React, { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './ImageFinder.Styled';
import { Search } from 'lucide-react';
export class Searchbar extends Component {
  render() {
    return (
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <Search size={24} color="#1d2add" />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
