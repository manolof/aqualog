import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../config/routes';
import { AuthenticationModel } from '../../models/auth';

class NavComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			navMenuOpen: false,
		};
	}

	toggleNavMenu() {
		const navMenuOpen = this.state.navMenuOpen;

		this.setState({
			navMenuOpen: !navMenuOpen,
		});
	}

	isActiveClassName() {
		const { navMenuOpen } = this.state;

		return navMenuOpen && 'is-active';
	}

	render() {
		const { auth, signOut } = this.props;

		return (
			<nav className='navbar is-light' role='navigation' aria-label='main navigation'>
				<div className='container'>
					<div className='navbar-brand'>
						<div className='navbar-item'>
							<h4 className='title'>
								Hello,&nbsp;
								{
									auth.authenticated ?
										auth.user.displayName :
										'anonymous'
								}!
							</h4>
						</div>

						<button
							className={`button is-white navbar-burger burger ${this.isActiveClassName()}`}
							aria-label='menu'
							aria-expanded='false'
							data-target='mainNavbar'
							onClick={() => this.toggleNavMenu()}
						>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
						</button>
					</div>
					<div id='mainNavbar' className={`navbar-menu ${this.isActiveClassName()}`}>
						<div className='navbar-end'>
							{
								routes
									.filter((route) => route.path !== '/')
									.map((route, index) =>
										<NavLink exact to={route.path}
											activeClassName='is-active'
											className='navbar-item'
											key={index}
										>
											{route.title}
										</NavLink>
									)
							}

							<div className='navbar-item'>
								{
									auth.authenticated &&
									<button className='button is-small' onClick={signOut}>
										Log out
									</button>
								}
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

NavComponent.propTypes = {
	auth: AuthenticationModel.isRequired,
	signOut: PropTypes.func.isRequired,
};

export {
	NavComponent,
};
