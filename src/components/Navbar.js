import React from 'react';
import { NavSpan, BurgerUl, Nav, NavDiv, MenuLine } from '../styles/styles';

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
				onClick = {(event) => props.changeDisplay(event)}
				title={item}
				display = {props.display}
			>
				{item}
			</NavSpan>  
		);
	};

	if (props.eng) {
		return (
			<Nav>
				<NavDiv
					onClick = {() => props.toggleNav(props.nav)}
					display = {props.display}
				>
					<MenuLine
						nav = {props.nav}
						display = {props.display}
					/>
					<MenuLine
						nav = {props.nav}
						display = {props.display}
					/>
					<MenuLine
						nav = {props.nav}
						display = {props.display}
					/>
				</NavDiv>
				<BurgerUl
					nav = {props.nav}
				>
					{renderBurger(navlist.english)}
				</BurgerUl>
			</Nav>
		);
	} else {
		return (
			<Nav>
				<NavDiv
					onClick = {() => props.toggleNav(props.nav)}
					display = {props.display}
				>
					<MenuLine
						nav = {props.nav}
						display = {props.display}
					/>
					<MenuLine
						nav = {props.nav}
						display = {props.display}
					/>
					<MenuLine
						nav = {props.nav}
						display = {props.display}
					/>
				</NavDiv>
				<BurgerUl
					nav = {props.nav}
				>
					{renderBurger(navlist.french)}
				</BurgerUl>
			</Nav>
		);
	}

};

export default Navbar;