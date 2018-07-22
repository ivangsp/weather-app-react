/* eslint-disable no-tabs */
import React from 'react';
import logo from '../../../static/icons/mc-logo.png';

const NavBar = () => {
	return (
			<nav className="navbar navbar-light">
				<a className="navbar-brand" href="#">
					<img src={logo} width="30" height="30" alt="" />
				</a>
			</nav>
	);
};

export default NavBar;
