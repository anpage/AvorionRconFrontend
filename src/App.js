import React, { Component } from 'react';
import './App.css';

import PlayerTable from './components/PlayerTable.js';

import mockdata from './mockdata/mock.json';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Avorion RCON</h2>
                </div>
                <h3>Players</h3>
                <PlayerTable playerData={mockdata.players} />
            </div>
        );
    }
}

export default App;
