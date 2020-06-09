import React, { Component } from 'react';
import './css/Footer.css';

export class Footer extends Component {
	static displayName = Footer.name;

	render() {
		return (
				<footer className="footer section" id="contact-us">
					<h2 className="section-title">Contact Us</h2>
					<div className="footer-content">
						<p>
							Email: devgroup@devgroup.com
						</p>
					</div>
				</footer>
		);
	}
}
