import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

import PlayerDropdown from './PlayerDropdown.js';

export default class PlayerTable extends Component {
    static get propTypes() {
        return ({
            playerData: React.PropTypes.shape({
                index: React.PropTypes.number,
                name: React.PropTypes.string,
                money: React.PropTypes.number
            }).isRequired
        })
    }

    render() {
        const players = this.props.playerData;
        return (
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
                    {players.map((player) =>
                        <tr key={player.index}>
                            <th className="text-center" scope="row">{player.index}</th>
                            <td>{player.name}</td>
                            <td>{player.money}</td>
                            <td><PlayerDropdown /></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}
