import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './css/NavMenu.css';
import Logo from '../assets/images/cover.png'; //https://www.namecheap.com/logo-maker/app/new

export class NavMenu extends Component {
	static displayName = NavMenu.name;

	constructor (props) {
		super(props);
		this.onNavLinkClick = this.onNavLinkClick.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = { collapsed: true };
	}

	onNavLinkClick() {
		this.setState({ collapsed: true });
	}

	toggleNavbar () {
		this.setState({ collapsed: !this.state.collapsed });
	}

	render () {
		return (
			<header>
				<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
					<Container fluid>
						<NavbarBrand tag={RRNavLink} to="/"><img src={Logo} alt="DevGroup" className="logo" /></NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
						<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
							<ul className="navbar-nav flex-grow">
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.onNavLinkClick} className="text-dark" activeClassName="" to="/">
										Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.onNavLinkClick} className="text-dark" activeClassName="" to="/what-we-do">
										What&nbsp;We&nbsp;Do
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.onNavLinkClick} className="text-dark" activeClassName="" to="/who-we-are">
										Who&nbsp;We&nbsp;Are
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.onNavLinkClick} className="text-dark" activeClassName="" to="/our-work">
										Our&nbsp;Work
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink exact tag={RRNavLink} onClick={this.onNavLinkClick} className="text-dark" activeClassName="" to="/contact-us">
										Contact&nbsp;Us
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
