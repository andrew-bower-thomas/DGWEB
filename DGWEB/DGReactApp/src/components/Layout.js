import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import { Ticker } from './Ticker';

export class Layout extends Component {
	static displayName = Layout.name;

	render() {
		return (
			<div className="flex-wrapper">
				<Ticker className="no-flex" />
				<NavMenu className="no-flex" />
				<Container className="flex tab-container" fluid>
					{this.props.children}
				</Container>
				<Footer className="no-flex" />
			</div>
		);
	}
}