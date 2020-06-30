import React, { Component } from 'react';
import './css/Footer.css';

export class Footer extends Component {
	static displayName = Footer.name;

	render() {
		return (
			<footer className="footer" id="footer">
				<div className="footer-content">
					Contact Email: info@devgroup.co
				</div>
			</footer>
		);
	}
}
