import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
	static displayName = App.name;
	bgUrls = ['https://image.shutterstock.com/image-photo/empty-urban-city-street-view-600w-1023602029.jpg', 'https://image.shutterstock.com/image-photo/swing-seat-600w-121483045.jpg', 'https://image.shutterstock.com/image-photo/empty-dark-rings-chin-bar-600w-786240340.jpg', 'https://image.shutterstock.com/image-photo/abandoned-empty-swimming-pool-600w-1283574364.jpg'];
	nextBgUrlsIndex = 0;

	componentDidMount() {
		this.setNextBackgroundImg();
		this.interval = setInterval(() => { this.setNextBackgroundImg(); }, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	setNextBackgroundImg() {
		document.body.style.backgroundImage = 'url(' + this.bgUrls[this.nextBgUrlsIndex] + ')';
		this.nextBgUrlsIndex = (this.nextBgUrlsIndex + 1) % this.bgUrls.length;
	}

	render () {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/counter' component={Counter} />
				<Route path='/fetch-data' component={FetchData} />
			</Layout>
		);
	}
}
