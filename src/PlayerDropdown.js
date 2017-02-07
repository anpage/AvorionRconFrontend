import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            <Dropdown isOpen={this.state.open} toggle={this.toggle}>
                <DropdownToggle caret><i className="fa fa-cog" /></DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>User Menu</DropdownItem>
                    <DropdownItem>Message</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Kick</DropdownItem>
                    <DropdownItem>Ban</DropdownItem>
                    <DropdownItem>Kill</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}
