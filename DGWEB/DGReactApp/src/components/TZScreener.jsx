import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
//import HCChart from './HCChart';
import { HCChart } from './HCChartClass';
import './css/TZScreener.css';
import './css/TabContent.css';
import TZLogo from '../assets/images/tz-logo.svg';

export default function TZScreener(props) {
	return (
		<div className="flex-wrapper flex-wrapper-column" id="tz-screener">
			<div className="no-flex" id="tz-screener-header">
				<img src={TZLogo} alt="TradeZero" />
			</div>
			<div className="flex">
				<TZScreenerContent liveQuotes={props.liveQuotes} historicalQuotes={props.historicalQuotes} />
			</div>
		</div>
	);
}

function TZScreenerContent(props) {
	const [symbol, setSymbol] = useState('USD-BTC');

	function changeSymbol(newSymbol) {
		setSymbol(newSymbol);
	}

	return (
		<div className="flex-wrapper flex-wrapper-row" id="tz-screener-content">
			<div className="no-flex">
				<TZScreenerLeft historicalQuotes={props.historicalQuotes} onSymbolChange={changeSymbol} />
			</div>
			<div className="flex">
				<TZScreenerMiddle symbol={symbol} historicalQuotes={props.historicalQuotes} />
			</div>
			<div className="no-flex">
				<TZScreenerRight liveQuotes={props.liveQuotes} />
			</div>
		</div>
	);
}

function TZScreenerLeft(props) {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

	function toggleDropdown(e) {
		setDropdownIsOpen(!dropdownIsOpen);
	}

	function onDropdownItemClick(e) {
		props.onSymbolChange(e.currentTarget.textContent);
	};

	return (
		<div className="screener-column" id="tz-screener-left">
			<Dropdown isOpen={dropdownIsOpen} toggle={toggleDropdown}>
				<DropdownToggle caret>
					Select Symbol
					</DropdownToggle>
				<DropdownMenu>
					{Object.keys(props.historicalQuotes).map((symbol) => (
						<DropdownItem key={symbol} onClick={onDropdownItemClick}>{symbol}</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}

function TZScreenerMiddle(props) {
	return (
		<div className="screener-column" id="tz-screener-middle">
			<HCChart symbol={props.symbol} historicalQuotes={props.historicalQuotes[props.symbol] || []} />
		</div>
	);
}

function TZScreenerRight(props) {
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
					{props.liveQuotes.map((quote) => (
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
