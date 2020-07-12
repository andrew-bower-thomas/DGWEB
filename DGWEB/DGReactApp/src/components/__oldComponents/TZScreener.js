import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import { HCChart } from './HCChart';
import './css/TZScreener.css';
import './css/TabContent.css';
import TZLogo from '../assets/images/tz-logo.svg';

export class TZScreener extends Component {
	render() {
		return (
			<div className="flex-wrapper flex-wrapper-column" id="tz-screener">
				<div className="no-flex" id="tz-screener-header">
					<img src={TZLogo} alt="TradeZero" />
				</div>
				<div className="flex">
					<TZScreenerContent liveQuotes={this.props.liveQuotes} historicalQuotes={this.props.historicalQuotes} />
				</div>
			</div>
		);
	}
}

class TZScreenerContent extends Component {
	constructor(props) {
		super(props);

		this.changeSymbol = this.changeSymbol.bind(this);
		this.state = { symbol: 'USD-BTC' };
	}

	changeSymbol(newSymbol) {
		this.setState({ symbol: newSymbol });
	}

	render() {
		return (
			<div className="flex-wrapper flex-wrapper-row" id="tz-screener-content">
				<div className="no-flex">
					<TZScreenerLeft historicalQuotes={this.props.historicalQuotes} onSymbolChange={this.changeSymbol} />
				</div>
				<div className="flex">
					<TZScreenerMiddle symbol={this.state.symbol} historicalQuotes={this.props.historicalQuotes} />
				</div>
				<div className="no-flex">
					<TZScreenerRight liveQuotes={this.props.liveQuotes} />
				</div>
			</div>
		);
	}
}

class TZScreenerLeft extends Component {
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

class TZScreenerMiddle extends Component {
	render() {
		return (
			<div className="screener-column" id="tz-screener-middle">
				<HCChart symbol={this.props.symbol} historicalQuotes={this.props.historicalQuotes} />
			</div>
		);
	}
}

class TZScreenerRight extends Component {
	render() {
		return (
			<div className="screener-column" id="tz-screener-right">
				<Table>
					<thead>
						<tr>
							<th>Symbol</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{this.props.liveQuotes.map((quote) => (
							<tr key={quote.symbol}>
								<th>{quote.symbol}</th>
								<td>{quote.price}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}
