import React, { Component } from 'react';



const Navbar = (props) => {

	let navlist = props.navlist;

const renderNavbar = (arr) => {
		return arr.map((item, i) => 
			<span key={i}>
				{item}  
			</span>
		);
	};
	return (
		<div>
			<span>Colin Nash</span>
			{renderNavbar(navlist)}
		</div>
	);
};

export default Navbar;