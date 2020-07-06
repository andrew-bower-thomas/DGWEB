import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './css/NavMenu.css';
import LogoInline from '../assets/images/logo-inline.png'; //https://www.namecheap.com/logo-maker/app/new

export class NavMenu extends Component {
	constructor (props) {
		super(props);

		this.handleOnClick = this.handleOnClick.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = { isCollapsed: true };
	}

	handleOnClick() {
		this.setState({ isCollapsed: true });
	}

	toggleNavbar () {
		this.setState({ isCollapsed: !this.state.isCollapsed });
	}

	render () {
		return (
			<header>
				<Navbar className="navbar-expand-md navbar-toggleable-md mb-3">
					<Container fluid>
						<NavbarBrand tag={RRNavLink} onClick={this.handleOnClick} to="/"><img src={LogoInline} alt="DevGroup" id="logo-navbar" /></NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
						<Collapse className="d-md-inline-flex flex-md-row-reverse" isOpen={!this.state.isCollapsed} navbar>
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
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										PROJECTS
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>
											<NavLink exact tag={RRNavLink} onClick={this.handleOnClick} className="" activeClassName="active" to="/projects/tz-screener">
												TRADEZERO&nbsp;STOCK&nbsp;SCREENER
											</NavLink>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</ul>
						</Collapse>
					</Container>
				</Navbar>
			</header>
		);
	}
}
