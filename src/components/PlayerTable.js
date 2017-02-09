import React, {Component} from 'react';
import {
  Table,
  Card,
  CardBlock,
  CardTitle,
} from 'reactstrap';

import PlayerDropdown from './PlayerDropdown.js';

export default class PlayerTable extends Component {
  static get propTypes() {
    return ({
      playerData: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          index: React.PropTypes.number, 
          name: React.PropTypes.string, 
          money: React.PropTypes.number
        }).isRequired
      )
    })
  }

  render() {
    const players = this.props.playerData;
    return (
      <Card>
        <CardBlock>
          <CardTitle>Players</CardTitle>
        </CardBlock>
        <Table striped hover>
          <thead>
            <tr>
              <th className="text-center">Index</th>
              <th className="text-center">Name</th>
              <th className="text-center">Money</th>
              <th className="text-center">Sector</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {players.map((player) => <tr key={player.index}>
              <th className="text-center align-middle" scope="row">{player.index}</th>
              <td className="align-middle">{player.name}</td>
              <td className="align-middle">{player.money}</td>
              <td className="align-middle">{player.sector[0]}, {player.sector[1]}</td>
              <td className="align-middle"><PlayerDropdown/></td>
            </tr>)}
          </tbody>
        </Table>
      </Card>
    )
  }
}
