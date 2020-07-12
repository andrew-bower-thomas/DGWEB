import React from 'react';
import TZScreener from './TZScreener';
import './css/Screener.css';
import './css/TabContent.css';

export default function Screener(props) {
	return (
		<div className="tab-content" id="screener">
			<div className="tab-header">TRADEZERO STOCK SCREENER</div>
			<TZScreener liveQuotes={props.liveQuotes} historicalQuotes={props.historicalQuotes} />
		</div>
	);
}
