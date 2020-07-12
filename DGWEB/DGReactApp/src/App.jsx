import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import OurWork from './components/OurWork';
import ContactUs from './components/ContactUs';
import Screener from './components/Screener';
import * as signalR from "@microsoft/signalr";
import './assets/css/styles.css'
import './assets/css/background.css';

export default function App() {
	const [hubConnection, setHubConnection] = useState(null);
	const [liveQuotes, setLiveQuotes] = useState([]);
	const [historicalQuotes, setHistoricalQuotes] = useState({});

	useEffect(() => {
		//http - pull
		updateQuotes();
		const interval = setInterval(() => {
			updateQuotes();
		}, 1000);

		//signalr - push
		const newHubConnection = new signalR.HubConnectionBuilder()
			.withUrl('/marketdatahub')
			.configureLogging(signalR.LogLevel.Information)
			.build();
		setHubConnection(newHubConnection);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (hubConnection !== null) {
			hubConnection
				.start()
				.then(() => console.log('Connection started!'))
				.catch(err => console.log('Error while establishing connection :('));

			hubConnection.on('PushQuote', (quote) => {
				// do something with quote
			});
		}
	}, [hubConnection]);

	function sendMessage() {
		if (hubConnection !== null) {
			if (hubConnection.connectionState === 'Connected') {
				hubConnection
					.invoke('SendMessage', 'test message')
					.catch(err => console.error(err));
			}
		}
	};

	async function updateQuotes() {
		try {
			const response = await fetch('api/quotes');
			var quotes = await response.json();
			processQuotes(quotes);
		}
		catch (e) {
			console.log(e);
		}
	};

	function processQuotes(quotes) {
		setLiveQuotes(quotes);
		setHistoricalQuotes(prevHistoricalQuotes => {
			var newHisoricalQuotes = prevHistoricalQuotes;
			quotes.forEach(quote => {
				var symbol = quote.symbol;
				var newQuoteData = {
					quoteDT: new Date(quote.quoteDT),
					//price: quote.price
					price: (quote.price + 0.05 * quote.price * Math.random()) // add noise
				};
				if (!(symbol in newHisoricalQuotes)) {
					newHisoricalQuotes[symbol] = [newQuoteData];
				}
				else {
					newHisoricalQuotes[symbol] = [...newHisoricalQuotes[symbol], newQuoteData];
				}
			});
			return newHisoricalQuotes;
		});
	};

	return (
		<div id="app">
			<ul className="background-image">
				<li><span id="background-image-1"></span></li>
				<li><span id="background-image-2"></span></li>
				<li><span id="background-image-3"></span></li>
				<li><span id="background-image-4"></span></li>
			</ul>
			<Layout liveQuotes={liveQuotes}>
				<Route exact path='/' component={Home} />
				<Route path='/what-we-do' component={WhatWeDo} />
				<Route path='/who-we-are' component={WhoWeAre} />
				<Route path='/our-work' component={OurWork} />
				<Route path='/contact-us' component={ContactUs} />
				<Route path='/projects/tz-screener' render={() => <Screener liveQuotes={liveQuotes} historicalQuotes={historicalQuotes} />} />
			</Layout>
		</div>
	);
}
