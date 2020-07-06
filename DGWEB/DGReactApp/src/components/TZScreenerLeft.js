import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './css/TZScreenerLeft.css';


export class TZScreenerLeft extends Component {
	constructor(props) {
		super(props);

		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.onDropdownItemClick = this.onDropdownItemClick.bind(this);
		this.state = { dropdownIsOpen: false };
	}

	toggleDropdown() {
		this.setState({ dropdownIsOpen: !this.state.dropdownIsOpen });
	}

	onDropdownItemClick(e) {
		this.props.onSymbolChange(e.currentTarget.textContent);
	};

	render() {
		return (
			<div className="screener-column" id="tz-screener-left">
				<Dropdown isOpen={this.state.dropdownIsOpen} toggle={this.toggleDropdown}>
					<DropdownToggle caret>
						Select Symbol
					</DropdownToggle>
					<DropdownMenu>
						{Object.keys(this.props.historicalQuotes).map((symbol) => (
							<DropdownItem key={symbol} onClick={this.onDropdownItemClick}>{symbol}</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>
			</div>
		);
	}
}
