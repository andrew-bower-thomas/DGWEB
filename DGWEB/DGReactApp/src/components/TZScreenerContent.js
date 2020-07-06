import React, { Component } from 'react';
import { TZScreenerLeft } from './TZScreenerLeft';
import { TZScreenerMiddle } from './TZScreenerMiddle';
import { TZScreenerRight } from './TZScreenerRight';
import './css/TZScreenerContent.css';

export class TZScreenerContent extends Component {
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
