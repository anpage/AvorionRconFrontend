import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import './App.css';
import mockdata from './mock.json';

import PlayerDropdown from './PlayerDropdown.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Avorion RCON</h2>
                </div>
                <h3>Players</h3>
                <div className="players-table">
                    <Table>
                        <thead>
                            <tr>
                                <th className="text-center">Index</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Money</th>
                                <th className="text-center">
                                    <Button>
                                        <i className="fa fa-refresh" />
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockdata.players.map((player) =>
                                <tr key={player.index}>
                                    <th className="text-center" scope="row">{player.index}</th>
                                    <td>{player.name}</td>
                                    <td>{player.money}</td>
                                    <td><PlayerDropdown /></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default App;
