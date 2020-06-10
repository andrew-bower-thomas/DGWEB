import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/examples/FetchData';
import { Counter } from './components/examples/Counter';

import './assets/css/styles.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <ul class="cb-slideshow">
                    <li><span id="background-image-1"></span></li>
                    <li><span id="background-image-2"></span></li>
                    <li><span id="background-image-3"></span></li>
                    <li><span id="background-image-4"></span></li>
                </ul>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data' component={FetchData} />
                </Layout>
            </div>

        );
    }
}


/* Provide sufficient contrast against white background */
a {
	color: #0366d6;
}

code {
	color: #E01A76;
}

.btn - primary {
	color: #fff;
	background - color: #1b6ec2;
	border - color: #1861ac;
}





/*http://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/*/



.container {
	position: relative;
	text - align: center;
}



.cb - slideshow {
	position: fixed;
	width: 100 %;
	height: 100 %;
	top: 0px;
	left: 0px;
	z - index: 0;
}


	.cb - slideshow li span {
	width: 100 %;
	height: 100 %;
	position: absolute;
	top: 0px;
	left: 0px;
	color: transparent;
	background - size: cover;
	background - position: 50 % 50 %;
	opacity: 0;
	z - index: 0;
	animation: imageAnimation 40s linear infinite 0s;
}




#background - image - 1 {
	background - image: url(../images/ashkan - forouzani - XGrLnJTYVfM - unsplash.jpg);
}

#background - image - 2 {
	background - image: url(../images/crystal - jo - BHa4u8NmBIg - unsplash.jpg);
	animation - delay: 10s;
}

#background - image - 3 {
	background - image: url(../images/juli - kosolapova - lXEfvemtIsA - unsplash.jpg);
	animation - delay: 20s;
}

#background - image - 4 {
	background - image: url(../images/utsav - shah - 0qmIJOcCtbs - unsplash.jpg);
	animation - delay: 30s;
}

/* Animation for the slideshow images */
@keyframes imageAnimation {
	0 % {
		opacity: 0;
	}

	5 % {
		opacity: 1;
	}

	25 % {
		opacity: 1
	}

	30 % {
		opacity: 0
	}

	100 % {
		opacity: 0
	}
}









/*@font-face {
	font-family: RobotoMedium;
	src: url(../fonts/Roboto-Medium.ttf);
}

html, body, #root {
	height: 100%;
	margin: 0;
	overflow: hidden;
	/*background-color: gray;
}

html {
	font-size: 14px;
}

@media (min-width: 768px) {
	html {
		font-size: 16px;
	}
}

#app {
	overflow: auto;
	font-family: RobotoMedium;
	/*transition: opacity 1s ease-out, background-image 3s ease-in-out;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	animation: changeBg 5s infinite;
}





/*http://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/



.container {
	position: relative;
	text-align: center;
}



.cb-slideshow {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	z-index: 0;
	color: transparent;
}


	.cb-slideshow li span {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		color: transparent;
		background-size: cover;
		background-position: 50% 50%;
		opacity: 0;
		z-index: 0;
		animation: imageAnimation 36s linear infinite 0s;
	}




	.cb-slideshow li:nth-child(1) span {
		background-image: url(../images/ashkan-forouzani-XGrLnJTYVfM-unsplash.jpg);
	}

	.cb-slideshow li:nth-child(2) span {
		background-image: url(../images/crystal-jo-BHa4u8NmBIg-unsplash.jpg);
		animation-delay: 6s;
	}

	.cb-slideshow li:nth-child(3) span {
		background-image: url(../images/ashkan-forouzani-XGrLnJTYVfM-unsplash.jpg);
		animation-delay: 12s;
	}

	.cb-slideshow li:nth-child(4) span {
		background-image: url(../images/crystal-jo-BHa4u8NmBIg-unsplash.jpg);
		animation-delay: 18s;
	}

	.cb-slideshow li:nth-child(5) span {
		background-image: url(../images/juli-kosolapova-lXEfvemtIsA-unsplash.jpg);
		animation-delay: 24s;
	}

	.cb-slideshow li:nth-child(6) span {
		background-image: url(../images/utsav-shah-0qmIJOcCtbs-unsplash.jpg);
		animation-delay: 30s;
	}

/*#background-image-1 {
	background-image: url(./images/1.jpg);
}

#background-image-2 {
	background-image: url(./images/2.jpg);
	animation-delay: 6s;
}

#background-image-3 {
	background-image: url(./images/3.jpg);
	animation-delay: 12s;
}

#background-image-4 {
	background-image: url(./images/4.jpg);
	animation-delay: 18s;
}


/* Animation for the slideshow images
@keyframes imageAnimation {
	0% {
		opacity: 0;
		animation-timing-function: ease-in;
	}

	8% {
		opacity: 1;
		animation-timing-function: ease-out;
	}

	17% {
		opacity: 1
	}

	25% {
		opacity: 0
	}

	100% {
		opacity: 0
	}
}

/* Show at least something when animations not supported
.no-cssanimations .cb-slideshow li span {
	opacity: 1;
}




.flex-wrapper {
	min-height: 100%;
	display: flex;
	flex-direction: column;
}

.no-flex {
	flex-shrink: 0;
}

.flex {
	flex-grow: 1;
}

a {
	color: #0366d6;
}

code {
	color: #E01A76;
}

.btn-primary {
	color: #fff;
	background-color: #1b6ec2;
	border-color: #1861ac;
}

.tab-content {
	background-color: rgba(124, 124, 124, 0.8);
	text-align: center;
}*/









//import React, { Component } from 'react';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { WhatWeDo } from './components/WhatWeDo';
//import { WhoWeAre } from './components/WhoWeAre';
//import { OurWork } from './components/OurWork';
//import { ContactUs } from './components/ContactUs';

//import './assets/css/styles.css'
//import image1 from './assets/images/ashkan-forouzani-XGrLnJTYVfM-unsplash.jpg';
//import image2 from './assets/images/crystal-jo-BHa4u8NmBIg-unsplash.jpg';
//import image3 from './assets/images/juli-kosolapova-lXEfvemtIsA-unsplash.jpg';
//import image4 from './assets/images/utsav-shah-0qmIJOcCtbs-unsplash.jpg';
//import monaLisa1 from './assets/images/mona-lisa.jpg';
//import monaLisa2 from './assets/images/mona-lisa.jpg';
//var BackgroundImages = [image1, image2, image3, image4];
//var AllImages = [image1, image2, image3, image4, monaLisa1, monaLisa2];

//export default class App extends Component {
//	static displayName = App.name;
//	constructor(props) {
//		super(props);
//		this.state = {
//			isLoading: true
//		};
//	}

//	componentDidMount() {
//		//this.preloadImages();
//		//document.getElementById("progress-indicator").style.display = "none";
//		this.setState({ isLoading: false });
//	}

//	componentWillUnmount() {
//		clearInterval(this.interval);
//	}

//	preloadImages() {
//		//https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js
//		AllImages.forEach((image) => {
//			const newImage = new Image();
//			newImage.src = image;
//			window[image] = newImage;
//		});
//    }


//	render() {
//		const style = {
//			opacity: this.state.isLoading ? "0" : "1"
//		}
//		return (
//			<div id="app" style={style}>
//				<ul className="cb-slideshow">
//					<li><span></span></li>
//					<li><span></span></li>
//					<li><span></span></li>
//					<li><span></span></li>
//					<li><span></span></li>
//					<li><span></span></li>
//				</ul>
//				<Layout style={{ display: "none" }}>
//					<Route exact path='/' component={Home} />
//					<Route path='/what-we-do' component={WhatWeDo} />
//					<Route path='/who-we-are' component={WhoWeAre} />
//					<Route path='/our-work' component={OurWork} />
//					<Route path='/contact-us' component={ContactUs} />
//				</Layout>
//			</div>
//		);
//	}
//}
