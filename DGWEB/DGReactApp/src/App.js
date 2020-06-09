import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { WhatWeDo } from './components/WhatWeDo';
import { WhoWeAre } from './components/WhoWeAre';
import { OurWork } from './components/OurWork';
import { ContactUs } from './components/ContactUs';

import './assets/css/styles.css'
import image1 from './assets/images/ashkan-forouzani-XGrLnJTYVfM-unsplash.jpg';
import image2 from './assets/images/crystal-jo-BHa4u8NmBIg-unsplash.jpg';
import image3 from './assets/images/juli-kosolapova-lXEfvemtIsA-unsplash.jpg';
import image4 from './assets/images/utsav-shah-0qmIJOcCtbs-unsplash.jpg';
import monaLisa1 from './assets/images/mona-lisa.jpg';
import monaLisa2 from './assets/images/mona-lisa.jpg';
var BackgroundImages = [image1, image2, image3, image4];
var AllImages = [image1, image2, image3, image4, monaLisa1, monaLisa2];

export default class App extends Component {
	static displayName = App.name;
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			backgroundImage: BackgroundImages[0]
		};
	}

	componentDidMount() {
		this.preloadImages();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	preloadImages() {
		//https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
		AllImages.forEach((image) => {
			const newImage = new Image();
			newImage.src = image;
			window[image] = newImage;
		});
    }

	setNextBackgroundImage() {
		for (var i = 0; i < BackgroundImages.length; i++) {
			if (this.state.backgroundImage === BackgroundImages[i]) {
				this.setState({ backgroundImage: BackgroundImages[(i + 1) % BackgroundImages.length] });
				break;
            }
		}
	}

	handleImageLoaded() {
		document.getElementById("progress-indicator").style.display = "none";
		this.setState({ isLoading: false });
		this.interval = setInterval(() => { this.setNextBackgroundImage(); }, 5000);
	}

	render() {
		const style = {
			backgroundImage: `url(${this.state.backgroundImage})`,
			opacity: this.state.isLoading ? "0" : "1"
		}
		return (
			<div id="app" style={style}>
				{/* This img tag is used to let us know when the first background image has been loaded */}
				<img src={BackgroundImages[0]} alt="" style={{ display: "none" }} onLoad={this.handleImageLoaded.bind(this)} />
				<Layout style={{ display: "none" }}>
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
