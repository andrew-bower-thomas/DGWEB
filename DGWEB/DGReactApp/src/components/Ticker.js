import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import './css/Ticker.css';

export class Ticker extends Component {
	static displayName = Ticker.name;

	constructor(props) {
		super(props);
		this.state = { quotes: [] };
	}

	componentDidMount() {
		this.updateQuotes();
		this.interval = setInterval(() => { this.updateQuotes(); }, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	async updateQuotes() {
		const response = await fetch('api/quotes');
		var data = await response.json();
		if (data.length > 0) {
			data.sort(function (a, b) {
				return a.symbol.localeCompare(b.symbol);
			});
        }
		this.setState({ quotes: data });
	}

	render() {
		const quotesContainer = (
			<div className="ticker-scroll">
				{this.state.quotes.map((quote) => (
					<div key={quote.symbol} className="ticker-item">
						{quote.symbol}: <TickerPrice price={quote.price} />
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
				{/*<div className="ticker-wrap">
					<div className="ticker ticker1">
						{this.state.quotes.map((quote) => (
							<div key={quote.symbol} className="ticker-item">
								{quote.symbol}: <TickerPrice price={quote.price} />
							</div>
						))}
					</div>
				</div>*/}
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
			textColor: textColors.WHITE
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
		return (<div style={style} className="ticker-price">{this.props.price.toFixed(2)}</div> );
	}
}
