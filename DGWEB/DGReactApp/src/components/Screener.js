import React, { Component } from 'react';
import { TZScreener } from './TZScreener';
import './css/Screener.css';
import './css/TabContent.css';

export class Screener extends Component {
	render() {
		return (
			<div className="tab-content" id="screener">
				<div className="tab-header">TRADEZERO STOCK SCREENER</div>
				<TZScreener liveQuotes={this.props.liveQuotes} historicalQuotes={this.props.historicalQuotes} />
			</div>
		);
	}
}
