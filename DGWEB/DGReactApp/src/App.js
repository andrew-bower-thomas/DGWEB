import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { WhatWeDo } from './components/WhatWeDo';
import { WhoWeAre } from './components/WhoWeAre';
import { OurWork } from './components/OurWork';
import { ContactUs } from './components/ContactUs';
import './assets/css/styles.css'
import './assets/css/background.css';

export default class App extends Component {
	static displayName = App.name;

	constructor(props) {
		super(props);
		this.state = {  };
	}

	componentDidMount() {

	}

	componentWillUnmount() {

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
				<Layout>
					<Route exact path='/' component={Home} />
					<Route path='/what-we-do' component={WhatWeDo} />
					<Route path='/who-we-are' component={WhoWeAre} />
					<Route path='/our-work' component={OurWork} />
					<Route path='/contact-us' component={ContactUs} />
				</Layout>
			</div>
		);
	}
}
