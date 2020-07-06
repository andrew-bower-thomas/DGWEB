import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { WhatWeDo } from './components/WhatWeDo';
import { WhoWeAre } from './components/WhoWeAre';
import { OurWork } from './components/OurWork';
import { ContactUs } from './components/ContactUs';
import { Screener } from './components/Screener';
import './assets/css/styles.css'
import './assets/css/background.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			liveQuotes: [],
			historicalQuotes: {}
		};
	}

	componentDidMount() {
		this.updateQuotes();
		this.interval = setInterval(() => { this.updateQuotes(); }, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	async updateQuotes() {
		try {
			const response = await fetch('api/quotes');
			var quotes = await response.json();
			this.processQuotes(quotes);
		}
		catch (e) {
			console.log(e);
		}
	}

	processQuotes(quotes) {
		this.setState(prevState => {
			var historicalQuotes = Object.assign({}, prevState.historicalQuotes); // create mutable copy

			quotes.forEach(quote => {
				var symbol = quote.symbol;
				var newQuoteData = {
					quoteDT: new Date(quote.quoteDT),
					//price: quote.price
					price: (quote.price + 0.05*quote.price*Math.random()) // add noise
				};

				if (!(symbol in historicalQuotes)) {
					historicalQuotes[symbol] = [newQuoteData];
				}
				else {
					historicalQuotes[symbol] = [...historicalQuotes[symbol], newQuoteData];
				}
			});

			return { liveQuotes: quotes, historicalQuotes: historicalQuotes };
		});
	}

	render() {
		return (
			<div id="app">
				<ul className="background-image">
					<li><span id="background-image-1"></span></li>
					<li><span id="background-image-2"></span></li>
					<li><span id="background-image-3"></span></li>
					<li><span id="background-image-4"></span></li>
				</ul>
				<Layout liveQuotes={this.state.liveQuotes}>
					<Route exact path='/' component={Home} />
					<Route path='/what-we-do' component={WhatWeDo} />
					<Route path='/who-we-are' component={WhoWeAre} />
					<Route path='/our-work' component={OurWork} />
					<Route path='/contact-us' component={ContactUs} />
					<Route path='/projects/tz-screener' render={() => <Screener liveQuotes={this.state.liveQuotes} historicalQuotes={this.state.historicalQuotes} />} />
				</Layout>
			</div>
		);
	}
}
