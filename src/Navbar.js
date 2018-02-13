import React, { Component } from 'react';
import { NavSpan } from './styles/styles';

const Navbar = (props) => {

	let navlist = props.navlist;

const renderNavbar = (arr) => {
		return arr.map((item, i) => 
			<NavSpan key={i}
				onClick={() => props.english(props.eng)}
			>
				{item}  
			</NavSpan>
		);
	};
	return (
		<div>
			<NavSpan >Colin Nash</NavSpan>
			{renderNavbar(navlist)}
		</div>
	);
};

export default Navbar;