import React, { Component } from 'react';
import './css/Home.css';
import './css/TabContent.css';
import LogoStack from '../assets/images/logo-stack.png'; //https://www.namecheap.com/logo-maker/app/new

export class Home extends Component {
	render() {
		return (
			<div className="tab-content" id="home">
				<img src={LogoStack} alt="DevGroup" id="logo-home" />
				<p>AN NYC-BASED, WALL STREET-HONED TECHNOLOGY CONSULTING COMPANY</p>
			</div>
		);
	}
}
