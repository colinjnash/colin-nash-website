import React from 'react';
import {Article, Profile, Name, Title, Ahr } from '../styles/styles';
import { home } from '../static/ArticleText.js';

const MainArticle = (props) => {


	switch (props.display) {
	case 'Home':
		if(props.eng) {
			let english = home.english;
			return (
				<Article>	
					<Profile src={require('../assets/Profile_Main.png')} />
					<Name>
						{english.name}
					</Name>
					<Ahr/>
					<Title>{english.title}</Title>
				</Article>
			);
		} else if (!props.eng) {
			let french = home.french;
			return (
				<Article>
					<Profile src={require('../assets/Profile_Main.png')} />		
					<Name>
						{french.name}
					</Name>
					<Ahr/>
					<Title>{french.title}</Title>
				</Article>
			);

		}
	case 'About':
		if(props.eng) {
			return (
				<Article>	
				</Article>
			);
		} else if (!props.eng) {
			return (
				<Article>	
				</Article>
			);

		}

	default:
		return null;
	}
};

export default MainArticle;