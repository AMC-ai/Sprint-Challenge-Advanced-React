import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    players: {
      name: '',
      country: '',
      searches: 0,
      id: 0
    },
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log('players info', res.data)
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      if (this.state.user === '404') {
        axios
          .get('https://api.github.com/users/AMC-ai')
          .then(res => {
            this.setState({
              user: res.data,
              userText: 'AMC-ai'
            });
          })
          .catch(err => console.log(err));
      }
    }
    if (prevProps.someValue !== this.props.someValue) {
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
