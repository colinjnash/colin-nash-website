import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state= {
			Navbar: ['Home', 'About', 'Portfolio', 'Contact']
		};
	}

	render() {
		return (
			<div>
				<Navbar
					navlist = {this.state.Navbar}
				/>
			</div>
		);
	}
}
