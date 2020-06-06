import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { WhatWeDo } from './components/WhatWeDo';
import { WhoWeAre } from './components/WhoWeAre';
import { OurWork } from './components/OurWork';
import { ContactUs } from './components/ContactUs';

import './assets/css/styles.css'
//import image1 from './assets/images/ashkan-forouzani-XGrLnJTYVfM-unsplash.jpg';
//import image2 from './assets/images/crystal-jo-BHa4u8NmBIg-unsplash.jpg';
//import image3 from './assets/images/juli-kosolapova-lXEfvemtIsA-unsplash.jpg';
//import image4 from './assets/images/utsav-shah-0qmIJOcCtbs-unsplash.jpg';

var images = ["https://images.unsplash.com/photo-1522426266214-ec2d2abb9ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&h=500",
			  "https://images.unsplash.com/photo-1591296899037-86229af2f270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&h=500",
			  "https://images.unsplash.com/photo-1591280371978-0a9043ff6348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&h=500",
			  "https://images.unsplash.com/photo-1591243320228-b224bc77a38d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&h=500"];

export default class App extends Component {
	static displayName = App.name;
	constructor(props) {
		super(props);
		this.state = {
			backgroundImage: images[0]
		};
    }

	componentDidMount() {
		this.setNextBackgroundImg();
		this.interval = setInterval(() => { this.setNextBackgroundImg(); }, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	setNextBackgroundImg() {
		for (var i = 0; i < images.length; i++) {
			if (this.state.backgroundImage === images[i]) {
				this.setState({ backgroundImage: images[(i + 1) % images.length] });
				break;
            }
		}
	}

	render() {
		return (
			<div style={{ backgroundImage: `url(${this.state.backgroundImage})` }} id="app">
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
