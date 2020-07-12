import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import Ticker from './Ticker';

export default function Layout(props) {
	return (
		<div className="flex-wrapper flex-wrapper-column">
			<Ticker liveQuotes={props.liveQuotes} className="no-flex" />
			<NavMenu className="no-flex" />
			<Container className="flex tab-container" fluid>
				{props.children}
			</Container>
			<Footer className="no-flex" />
		</div>
	);
}