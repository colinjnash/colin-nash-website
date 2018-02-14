import React, { Component } from 'react';
import { NavbarWrap, LangWrap, Container } from './styles/styles';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import MainArticle from './components/MainArticle';

import { connect } from 'react-redux';
import * as actionTypes from './actions/actionTypes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state= {
			Navbar: {
				english: ['Home', 'About', 'Portfolio', 'Contact'],
				french: ['Accueil', 'À Propos', 'Réalisations', 'Contact']
			},
		};
	}

	render() {
		return (
			<Container>
				<NavbarWrap>
					<Navbar
						navlist = {this.state.Navbar}
					
						eng = {this.props.eng}
					/>
					<LangWrap
						english = {this.props.english}
						onClick={() => this.props.english(this.props.eng)}
					>
						{this.props.lang}
					</LangWrap>
				</NavbarWrap>
			</Container>
		);
	}
}

App.propTypes = {
	english: PropTypes.func,
	eng: PropTypes.bool,
	lang: PropTypes.string

};

const mapStateToProps = state => {
	return {
		content: state.lang.content,
		eng: state.lang.isEnglish,
		lang: state.lang.lang
	};
};

const mapDispatchToProps = dispatch => {
	return  {
		english: (eng) => dispatch({type:actionTypes.ENGLISH, value: !eng})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
