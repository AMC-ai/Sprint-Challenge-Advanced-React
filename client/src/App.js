import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {

  state = {
    players: [],
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

  componentDidUpdate() {
    console.log('is it workin');
    // this.setState({ players: [] });
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div className="followers">

            <PlayerCard players={this.state.players}></PlayerCard>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
