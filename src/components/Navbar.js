import React from 'react';
import { NavSpan, BurgerSpan, Nav, Link } from '../styles/styles';

const Navbar = (props) => {

	let navlist = props.navlist;

	// const renderNavbar = (arr) => {
	// 	return arr.map((item, i) => 
	// 		<NavSpan key={i}
	// 		>
	// 			{item}  
	// 		</NavSpan>
	// 	);
	// };


	const renderBurger = (arr) => {
		return arr.map((item, i) => 
			<NavSpan
				key={i}
			>
				{item}
			</NavSpan>  
		);
	};

	if (props.eng) {
		return (
			<Nav>
				<BurgerSpan>
					{renderBurger(navlist.english)}
				</BurgerSpan>
			</Nav>
		);
	} else {
		return (
			<Nav>
				<BurgerSpan>
					{renderBurger(navlist.french)}
				</BurgerSpan>
			</Nav>
		);
	}

};

export default Navbar;