import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    suggestions: [],
    searchText: '',
    showResult: false,
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ suggestions: res.data }));
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
      showResult: true,
    });
  }

  handleClick = (event) => {
    this.setState({
      showResult: false,
      searchText: event.target.innerText,
    })
  }

  render() {
    const { suggestions, searchText, showResult } = this.state;
    let displayResult = suggestions.filter(suggestion =>
      suggestion.name.toLowerCase().includes(searchText.toLowerCase())
    );

    let displayUpdate = [];
    if (showResult !== false && searchText !== '') {
      displayUpdate = (
        <ul className='output'>
          {displayResult.map(item =>
            <li
              key={item.id}
              onClick={this.handleClick}
            >
              {item.name}
            </li>)}
        </ul>
      )
    }

    return (
      <React.Fragment>
        <div className='inputBox'>
          <input
            tpye='text'
            value={searchText}
            placeholder='AUTO COMPLETE ...'
            className='inputText'
            onChange={this.handleChange}
          />
        </div>
        {displayUpdate}
      </React.Fragment>
    )
  }
}

export default App
