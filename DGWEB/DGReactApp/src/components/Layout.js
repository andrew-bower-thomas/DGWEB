import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
	static displayName = Layout.name;

	render () {
		return (
			<div className="flex-wrapper">
				<NavMenu className="no-flex"/>
				<Container className="flex container">
					{this.props.children}
				</Container>
				<Footer className="no-flex" />
			</div>
		);
	}
}
