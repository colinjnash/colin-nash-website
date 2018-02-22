import React from 'react';
import { home , about , portfolio, contact } from '../static/ArticleText.js';
import {Article , Profile, Name, Title, Ahr, ArticleWrap } from '../styles/styles';
import {ArticleTitle} from '../styles/AboutStyles';


const MainArticle = (props) => {


	switch (props.display) {
	case 'Home':
	case 'Accueil':
		if(props.eng) {
			let english = home.english;
			return (
				<Article>	
					<Profile src={require('../assets/Profile_Main.png')} />
					<ArticleWrap>
						<Name>
							{english.name}
						</Name>
						<Ahr/>
						<Title>{english.title}</Title>
					</ArticleWrap>
				</Article>
			);
		} else if (!props.eng) {
			let french = home.french;
			return (
				<Article>
					<Profile src={require('../assets/Profile_Main.png')} />		
					<ArticleWrap>
						<Name>
							{french.name}
						</Name>
						<Ahr/>
						<Title>{french.title}</Title>
					</ArticleWrap>
				</Article>
			);

		}
	case 'About':
	case'À Propos':
		if(props.eng) {
			let english = about.english;
			return (
				<Article>	
					<ArticleTitle>{english.title1}</ArticleTitle>
				</Article>
			);
		} else if (!props.eng) {
			let french = about.french;
			return (
				<Article>
					<ArticleTitle>{french.title1}</ArticleTitle>	
				</Article>
			);
		}
	case 'Portfolio':
	case 'Réalisations':
		if(props.eng) {
			let english = portfolio.english
			return (
				<Article>
					<ArticleTitle>{english.title1}</ArticleTitle>	
				</Article>
			);
		} else if (!props.eng) {
			let french = portfolio.french
			return (
				<Article>	
					<ArticleTitle>{french.title1}</ArticleTitle>	
				</Article>
			);
		}
	case 'Contact':
		if(props.eng) {
			let english = contact.english;
			return (
				<Article>
					<ArticleTitle>{english.title1}</ArticleTitle>
				</Article>
			);
		} else if (!props.eng) {
			let french = contact.french;
			return (
				<Article>	
					<ArticleTitle>{french.title1}</ArticleTitle>
				</Article>
			);
		}		
	default:
		return null;
	}
};

export default MainArticle;