import React, { Component } from 'react';
import { TZScreenerContent } from './TZScreenerContent';
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