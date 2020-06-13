import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './css/NavMenu.css';
import LogoInline from '../assets/images/logo-inline.png'; //https://www.namecheap.com/logo-maker/app/new

export class NavMenu extends Component {
	static displayName = NavMenu.name;

	constructor (props) {
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = { collapsed: true };
	}

	handleOnClick() {
		this.setState({ collapsed: true });
	}

	toggleNavbar () {
		this.setState({ collapsed: !this.state.collapsed });
	}

	render () {
		return (
			<header>
				<Navbar className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3">
					<Container fluid>
						<NavbarBrand tag={RRNavLink} onClick={this.handleOnClick} to="/"><img src={LogoInline} alt="DevGroup" id="logo-navbar" /></NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
						<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
							<ul className="navbar-nav flex-grow">
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.handleOnClick} className="" activeClassName="active" to="/">
										HOME
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.handleOnClick} className="" activeClassName="active" to="/what-we-do">
										WHAT&nbsp;WE&nbsp;DO
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.handleOnClick} className="" activeClassName="active" to="/who-we-are">
										WHO&nbsp;WE&nbsp;ARE
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.handleOnClick} className="" activeClassName="active" to="/our-work">
										OUR&nbsp;WORK
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.handleOnClick} className="" activeClassName="active" to="/contact-us">
										CONTACT&nbsp;US
									</NavLink>
								</NavItem>
							</ul>
						</Collapse>
					</Container>
				</Navbar>
			</header>
		);
	}
}
