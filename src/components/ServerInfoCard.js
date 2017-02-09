import { Button } from 'reactstrap';
import React, { Component } from 'react';
import {
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import moment from 'moment';

export default class PlayerDropdown extends Component {
  static get propTypes() {
    return ({
      serverData: React.PropTypes.shape({
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        seed: React.PropTypes.string,
        uptime: React.PropTypes.number,
        lastSave: React.PropTypes.number
      }).isRequired
    })
  }
  
  static secondsToTimeString(seconds) {
    const date = new Date(seconds * 1000); // Milliseconds
    return date.toISOString().substr(11, 8);
  }
  
  render() {
    const server = this.props.serverData;
    return (
      <Card>
        <CardBlock>
          <CardTitle>{server.name}</CardTitle>
          <CardSubtitle>{server.description}</CardSubtitle>
        </CardBlock>
        <CardBlock>
          <CardSubtitle>Seed</CardSubtitle>
          <CardText>{server.seed}</CardText>
        </CardBlock>
        <CardBlock>
          <CardSubtitle>Uptime</CardSubtitle>
          <CardText>
            {moment().subtract(server.uptime, 'seconds').fromNow(true)}
          </CardText>
        </CardBlock>
        <CardBlock>
          <CardSubtitle>Last Saved</CardSubtitle>
          <CardText>
            {moment().subtract(server.lastSave, 'seconds').fromNow()}
          </CardText>
        </CardBlock>
      <CardBlock>
        <CardTitle>Server Actions</CardTitle>
        <Button outline color="primary" size="sm">Force Save</Button>{' '}
        <Button outline color="primary" size="sm">Message All</Button>{' '}
        <Button outline color="danger" size="sm">Reboot</Button>{' '}
      </CardBlock>
      </Card>
    )
  }
}
