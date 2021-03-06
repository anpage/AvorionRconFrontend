import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default class PlayerDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Dropdown size="sm" isOpen={this.state.open} toggle={this.toggle}>
        <DropdownToggle caret><FontAwesome name="cog"/></DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Message</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Kick</DropdownItem>
          <DropdownItem>Ban</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Teleport</DropdownItem>
          <DropdownItem>Kill</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
