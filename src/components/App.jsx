import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

import { API } from './API/API';

const imgAPI = new API();

export class App extends Component {
  state = {
    input: '',
  };

  onSubmit = async e => {
    e.preventDefault();

    const inputText = e.target.elements.input.value;
    this.setState({ input: inputText });

    const { hits } = await imgAPI.fetchImgs(this.state.input);

    e.target.reset();
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <p>{this.state.input} </p>
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </>
    );
  }
}
