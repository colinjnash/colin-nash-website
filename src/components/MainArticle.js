import React from 'react';
import { home , about , portfolio, contact } from '../static/ArticleText.js';
import {Article , Profile, Name, Title, Ahr, ArticleWrap } from '../styles/styles';
import {ArticleTitle, AboutP1, AboutImg1, AboutImg2, AboutImg3, AboutP2, AboutP3} from '../styles/aboutStyles';
import {PortTitle, ProjectTitle, PortP, GitTitle, GitList, GitUList, GalapagosImg, GalapagosImg2, GalapagosImg3 } from '../styles/portfolioStyles';
import {ContactP } from '../styles/contactStyles.js';

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
						<Ahr />
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
					<AboutImg1 src={require('../assets/kilimanjaro.jpg')}/>
					<AboutP1>{english.p1}</AboutP1>
					<AboutP2>{english.p2}</AboutP2>
					<AboutImg2 src={require('../assets/kalemie.jpg')}/>
					<AboutImg3 src={require('../assets/greenland_about.jpg')}/>
					<AboutP3>{english.p3}</AboutP3>
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
			let english = portfolio.english;
			return (
				<Article>
					<PortTitle>{english.title1}</PortTitle>
					<ProjectTitle>{english.galapagos.title}</ProjectTitle>
					<GalapagosImg src={require('../assets/portfolio/galapagos_128.png')}/>
					<GalapagosImg2 src={require('../assets/portfolio/galapagos_demo.jpg')}/>
					<GalapagosImg3 src={require('../assets/portfolio/galapagos_demo1.jpg')}/>
					<PortP>{english.galapagos.desc}	</PortP>
					<PortP>{english.galapagos.desc2}</PortP>

					<GitTitle>{english.github}</GitTitle>
					<GitUList>
						{props.github.map((data, i) => 
							<GitList key={i}>{data.created_at.substring(0,10)}:{data.type.replace(/([A-Z])/g, ' $1')} to <a href={`https://github.com/${data.repo.name}`} target="_blank">{data.repo.name}</a></GitList>
						)}
					</GitUList>
				</Article>
			);
		} else if (!props.eng) {
			let french = portfolio.french;
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
					<ContactP>&#xea86;</ContactP>
					<ContactP>&#xea8b;</ContactP>
					<ContactP>&#xeab0;</ContactP>
					<ContactP>&#xeac9;</ContactP>
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