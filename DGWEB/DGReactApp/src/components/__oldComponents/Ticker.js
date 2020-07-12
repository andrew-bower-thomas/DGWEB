import React, { Component } from 'react';
import './css/Ticker.css';

export class Ticker extends Component {
	render() {
		const quotesContainer = (
			<div className="ticker-scroll">
				{this.props.liveQuotes.map((quote) => (
					<div key={quote.symbol} className="ticker-item">
						{quote.symbol}:  <TickerPrice price={quote.price} />
					</div>
				))}
			</div>);
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
}

const textColors = {
	WHITE: 'white',
	GREEN: 'green',
	RED: 'red'
}

class TickerPrice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.props.price,
			textColor: textColors.GREEN
		};
	}

	componentDidUpdate() {
		if (this.props.price > this.state.price) {
			this.setState({
				textColor: textColors.GREEN,
				price: this.props.price
			});
		}
		else if (this.props.price < this.state.price) {
			this.setState({
				textColor: textColors.RED,
				price: this.props.price
			});
		}
	}

	render() {
		const style = {
			color: this.state.textColor
		};
		return ( <div style={style} className="ticker-price">{this.props.price}</div> );
		//return ( <div style={style} className="ticker-price">{this.props.price.toFixed(2)}</div>);
	}
}
