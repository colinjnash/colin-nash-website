import React, { Component } from 'react';
import { NavbarWrap, LangWrap, Header, Container } from './styles/styles';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import MainArticle from './components/MainArticle';
import axios from 'axios';
require('./static/img/favicon.ico');
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

	componentDidMount() {
		{this.fetchGit();}	
	}

fetchGit = () => {
	let url = 'https://api.github.com/users/colinjnash/events';
	axios.get(url)
		.then((response) => {
			this.props.addGit(response);
			console.log(this.props.github);
		})
		.catch((error) => {
			console.log(error);
		});
}


render() {
	return (
		<Container>
			<Header
				display = {this.props.displayTitle}
				nav = {this.props.nav}
			>
				<NavbarWrap
					display = {this.props.displayTitle}
				>
					<Navbar
						navlist = {this.state.Navbar}
						toggleNav = {this.props.toggleNav}
						nav = {this.props.nav}
						eng = {this.props.eng}
						changeDisplay = {this.props.changeDisplay}
						display = {this.props.displayTitle}
					/>
					<LangWrap
						english = {this.props.english}
						onClick={() => this.props.english(this.props.eng)}
						display = {this.props.displayTitle}
					>
						{this.props.lang}
					</LangWrap>
				</NavbarWrap>
			</Header>
			<MainArticle
				display = {this.props.displayTitle}
				eng = {this.props.eng}
				github = {this.props.github}
			/>
		</Container>
	);
}
}

App.propTypes = {
	english: PropTypes.func,
	eng: PropTypes.bool,
	lang: PropTypes.string,
	toggleNav: PropTypes.func,
	displayTitle: PropTypes.string,
	nav: PropTypes.bool,
	changeDisplay: PropTypes.func,
	github: PropTypes.array

};

const mapStateToProps = state => {
	return {
		content: state.lang.content,
		eng: state.lang.isEnglish,
		lang: state.lang.lang,
		nav: state.pres.dropdownNav,
		displayTitle: state.pres.displayTitle,
		github: state.pres.github
	};
};

const mapDispatchToProps = dispatch => {
	return  {
		english: (eng) => dispatch({type:actionTypes.ENGLISH, value: !eng}),
		toggleNav: (nav) => dispatch({type:actionTypes.TOGGLE_NAV, value: !nav}),
		changeDisplay: (event) => dispatch({type:actionTypes.CHANGE_DISPLAY, value: event.currentTarget.title}),
		addGit: (response) => dispatch({type:actionTypes.ADD_GIT, value: response})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
