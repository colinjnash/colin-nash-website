import React, { Component } from 'react';
import { NavbarWrap } from './styles/styles';
import Navbar from './Navbar';
import { injectGlobal } from 'styled-components';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state= {
			Navbar: ['Home', 'About', 'Portfolio', 'Contact']
		};
	}

	render() {
		return (
			<NavbarWrap>
				<Navbar
					navlist = {this.state.Navbar}
				/>
			</NavbarWrap>
		);
	}
}
