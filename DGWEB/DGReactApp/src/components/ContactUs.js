import React, { Component } from 'react';
import './css/ContactUs.css';
import './css/TabContent.css';

export class ContactUs extends Component {
	render() {
		return (
			<div className="tab-content" id="contact-us">
				<div className="tab-header">CONTACT US</div>
				<div className="contact-content">
					Reach out to us at <b>dev@devgroup.co</b>. 
					We would be happy to discuss our potential partnership anytime (nights and weekends included &ndash; we work them all!). 
					We look forward to working together!
				</div>
			</div>
		);
	}
}
