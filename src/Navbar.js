import React, { Component } from 'react';
import { NavSpan } from './styles/styles';
import { connect } from 'react-redux';
import * as actionTypes from './actions/actionTypes';

const Navbar = (props) => {

	let navlist = props.navlist;

const renderNavbar = (arr) => {
		return arr.map((item, i) => 
			<NavSpan key={i}
			onClick={() => props.english()}
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

const mapStateToProps = state => {
	return {
		content: state.lang.content
	};
}

const mapDispatchToProps = dispatch => {
	return  {
		english: () => dispatch({type:actionTypes.ENGLISH})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);