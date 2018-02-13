import React, { Component } from 'react';
import { NavbarWrap } from './styles/styles';
import Navbar from './Navbar';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import * as actionTypes from './actions/actionTypes';

class App extends Component {
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
					english = {this.props.english}
					eng = {this.props.eng}
				/>
			</NavbarWrap>
		);
	}
}

const mapStateToProps = state => {
	return {
		content: state.lang.content,
		eng: state.lang.isEnglish
	};
};

const mapDispatchToProps = dispatch => {
	return  {
		english: (eng) => dispatch({type:actionTypes.ENGLISH, value: !eng})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
