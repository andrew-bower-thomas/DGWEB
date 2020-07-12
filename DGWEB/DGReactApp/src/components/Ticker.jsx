import React, { useState, useEffect } from 'react';
import { usePrevious } from '../lib/HooksLib';
import './css/Ticker.css';

export default function Ticker(props) {
	const quotesContainer = (
		<div className="ticker-scroll">
			{props.liveQuotes.map((quote) => (
				<div key={quote.symbol} className="ticker-item">
					{quote.symbol}:  <TickerPrice price={quote.price} />
				</div>
			))}
		</div>
	);

	return (
		<div className="" id="ticker">
			{/* https://reneroth.org/marquees-in-css/ */}
			<div className="ticker-wrap">
				{quotesContainer}
				{quotesContainer}
			</div>
		</div>
	);
}

function TickerPrice(props) {
	const [textColor, setTextColor] = useState('green');

	const prevPrice = usePrevious(props.price);
	useEffect(() => {
		if (props.price > prevPrice) {
			setTextColor('green');
		}
		else if (props.price < prevPrice) {
			setTextColor('red');
		}
	}, [props.price, prevPrice]);

	const style = {
		color: textColor
	};
	return ( <div style={style} className="ticker-price">{props.price}</div> );
}
