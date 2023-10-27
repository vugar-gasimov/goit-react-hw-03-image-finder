import React, { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './ImageFinder.Styled';
import { Search } from 'lucide-react';
import PropTypes from 'prop-types';
export class Searchbar extends Component {
  state = {
    searchValue: '',
  };
  static propTypes = {
    setQuery: PropTypes.func.isRequired,
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.setQuery(this.state.searchValue);
    this.setState({ searchValue: '' });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <Search size={24} color="#1d2add" />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={event =>
              this.setState({ searchValue: event.target.value })
            }
            value={this.state.searchValue}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Feel free to search photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
