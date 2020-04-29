import React from 'react';
import './App.css';
import axios from 'axios';
import Arrow from './Components/Arrow.js';
import ImgSlide from './Components/ImgSlide.js';


class App extends React.Component {
  state = {
    photos: [],
    index: 1,
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => this.setState({ photos: res.data }));
  }

  prevSlide = () => {
    if (this.state.index > 1) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: this.state.photos.length });
    }
  }

  nextSlide = () => {
    if (this.state.index < this.state.photos.length) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 1 });
    }
  }

  showSlide = () => {
    const { photos, index } = this.state;
    let tempUrl = '';
    let tempTitle = '';
    photos.forEach((photo) => {
      if (photo.id === index) {
        tempUrl = photo.url;
        tempTitle = photo.title;
      }
    });

    return <img src={tempUrl} alt={tempTitle} className='image' />;
  }

  render() {
    return (
      <div className='carousel'>
        <Arrow direction='left' handleClick={this.prevSlide} glyph='&#9664;' />
        <ImgSlide showSlide={this.showSlide} />
        <Arrow direction='right' handleClick={this.nextSlide} glyph='&#9654;' />
      </div>
    )
  }
}

export default App;
