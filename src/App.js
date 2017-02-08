import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap'

import ServerInfoCard from './components/ServerInfoCard.js';
import PlayerTable from './components/PlayerTable.js';

import mockdata from './mockdata/mock.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Avorion RCon</h2>
        </div>
        <Container>
          <Row>
            <Col>
              <ServerInfoCard serverData={mockdata.server} />
            </Col>
            <Col>
              <PlayerTable playerData={mockdata.players} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
