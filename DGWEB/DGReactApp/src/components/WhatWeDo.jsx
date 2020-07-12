import React from 'react';
import './css/WhatWeDo.css';
import './css/TabContent.css';
import TechImage from '../assets/images/creative-internet-computer-display-2004161.jpg';
import FinanceImage from '../assets/images/blue-and-yellow-graph-on-stock-market-monitor-159888.jpg';

export default function WhatWeDo() {
	return (
		<div className="tab-content" id="what-we-do">
			<div className="tab-header">WHAT WE DO</div>
			<div className="info-header">
				We are a team of engineers who pride ourselves on being able to learn anything and take on any challenge.
				</div>
			<div className="info-container">
				<img src={TechImage} alt="TechImage" className="info-image" />
				<div className="info-text info-text-right">
					<div className="info-text-header">SOFTWARE</div>
					<p>
						Over 21 combined years as software engineers, we have focused on writing clean, reuable, and reliable code while working with a wide variety of technologies and applications:
						</p>
					<ul>
						<li>We'll fill these out together</li>
						<li>Infrastructure (.NET, ...)</li>
						<li>Database (SqlSever, ...)</li>
						<li>Full-Stack Web (React, ASP.NET, ...)</li>
						<li>Quantitative Analysis (NumPy, ...)</li>
					</ul>
				</div>
			</div>
			<div className="info-container">
				<div className="info-text info-text-left">
					<div className="info-text-header">FINTECH</div>
					<p>
						With 18 combined years of Wall Street experience, we have consistently developed high-performance, high-reliability financial service systems using many cutting edge technologies:
						</p>
					<ul>
						<li>We'll fill these out together</li>
						<li>Trading Systems (...)</li>
						<li>Account Management Systems (...)</li>
						<li>Market Data Systems (...)</li>
						<li>Market Research Systems (...)</li>
					</ul>
				</div>
				<img src={FinanceImage} alt="FinanceImage" className="info-image" />
			</div>
		</div>
	);
}
