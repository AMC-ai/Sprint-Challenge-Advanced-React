import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';
import DarkSwitch from './components/DarkSwitch';

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

  componentWillUnmount() {
    console.log('is it workin no infi loop?')
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: []
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App" >

        <div >
          <DarkSwitch />
          <PlayerCard players={this.state.players}></PlayerCard>
        </div>

      </div>
    );
  }
}

export default App;
