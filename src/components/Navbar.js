import React from 'react';
import { NavSpan } from '../styles/styles';

const Navbar = (props) => {

	let navlist = props.navlist;

	const renderNavbar = (arr) => {
		return arr.map((item, i) => 
			<NavSpan key={i}
			>
				{item}  
			</NavSpan>
		);
	};

	if (props.eng) {
		return (
			<span>
				<span >Colin Nash</span>
				{renderNavbar(navlist.english)}
			</span>
		);
	} else {
		return (
			<span>
				<span>Colin Nash</span>
				{renderNavbar(navlist.french)}
			</span>
		);
	}

};

export default Navbar;