import React, { Component } from 'react';
import LogoStack from '../assets/images/logo-stack.png'; //https://www.namecheap.com/logo-maker/app/new
import './css/Home.css';

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<div className="tab-content" id="home">
				<img src={LogoStack} alt="DevGroup" id="logo-home" />
				<p>An NYC-based technology consulting company focused on writing clean, reusable, and reliable code</p>
			</div>
		);
	}
}
