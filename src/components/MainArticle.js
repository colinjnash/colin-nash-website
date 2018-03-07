import React from 'react';
import { home , about , portfolio, contact } from '../static/ArticleText.js';
import { Profile, Name, Title, Ahr } from '../styles/homeStyles';
import {Article , ArticleWrap } from '../styles/styles';
import {ArticleTitle, AboutP1, AboutImg1, AboutImg2, AboutImg3, AboutP2, AboutP3} from '../styles/aboutStyles';
import {PortTitle, ProjectTitle, PortP, GitTitle, GitList, GitUList, GalapagosImg, GalapagosImg2, GalapagosImg3, GithubP, GithubLink} from '../styles/portfolioStyles';
import {ContactP, ContactLink} from '../styles/contactStyles.js';

const MainArticle = (props) => {


	switch (props.display) {
	case 'Home':
	case 'Accueil':
		if(props.eng) {
			let english = home.english;
			return (
				<Article>	
						<Name>
							{english.name}
						</Name>
						<Ahr />
						<Title>{english.title}</Title>
				</Article>
			);
		} else if (!props.eng) {
			let french = home.french;
			return (
				<Article>
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
					<AboutImg1 src={require('../assets/kilimanjaro.jpg')}/>
					<AboutP1>{french.p1}</AboutP1>
					<AboutP2>{french.p2}</AboutP2>
					<AboutImg2 src={require('../assets/kalemie.jpg')}/>
					<AboutImg3 src={require('../assets/greenland_about.jpg')}/>
					<AboutP3>{french.p3}</AboutP3>	
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
					<GithubLink href="https://github.com/colinjnash/Galapagos-Dashboard" target="_blank"><GithubP>Check Out the Code Here!</GithubP></GithubLink>
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
					<PortTitle>{french.title1}</PortTitle>
					<ProjectTitle>{french.galapagos.title}</ProjectTitle>
					<GalapagosImg src={require('../assets/portfolio/galapagos_128.png')}/>
					<GalapagosImg2 src={require('../assets/portfolio/galapagos_demo.jpg')}/>
					<GalapagosImg3 src={require('../assets/portfolio/galapagos_demo1.jpg')}/>
					<PortP>{french.galapagos.desc}	</PortP>
					<PortP>{french.galapagos.desc2}</PortP>
					<GithubLink href="https://github.com/colinjnash/Galapagos-Dashboard" target="_blank"><GithubP>Link</GithubP></GithubLink>
					<GitTitle>{french.github}</GitTitle>
					<GitUList>
						{props.github.map((data, i) => 
							<GitList key={i}>{data.created_at.substring(0,10)}:{data.type.replace(/([A-Z])/g, ' $1')} to <a href={`https://github.com/${data.repo.name}`} target="_blank">{data.repo.name}</a></GitList>
						)}
					</GitUList>
				</Article>
			);
		}
	case 'Contact':
		if(props.eng) {
			let english = contact.english;
			return (
				<Article>
					<ArticleTitle>{english.title1}</ArticleTitle>
					<ContactLink href="mailto:colinjnash@gmail.com.com?Subject=Hello!" target="_top"><ContactP>&#xea86;</ContactP></ContactLink>
					<ContactLink href="https://plus.google.com/u/0/+ColinNash" target="_blank"><ContactP>&#xea8b;</ContactP></ContactLink>
					<ContactLink href="https://github.com/colinjnash" target="_blank"><ContactP>&#xeab0;</ContactP></ContactLink>
					<ContactLink href="https://www.linkedin.com/in/colin-nash/" target="_blank"><ContactP>&#xeac9;</ContactP></ContactLink>
				</Article>
			);
		} else if (!props.eng) {
			let french = contact.french;
			return (
				<Article>	
					<ArticleTitle>{french.title1}</ArticleTitle>
					<ContactLink href="mailto:colinjnash@gmail.com.com?Subject=Hey%20Let's%20Talk!" target="_top"><ContactP>&#xea86;</ContactP></ContactLink>
					<ContactLink href="https://plus.google.com/u/0/+ColinNash" target="_blank"><ContactP>&#xea8b;</ContactP></ContactLink>
					<ContactLink href="https://github.com/colinjnash" target="_blank"><ContactP>&#xeab0;</ContactP></ContactLink>
					<ContactLink href="https://www.linkedin.com/in/colin-nash/" target="_blank"><ContactP>&#xeac9;</ContactP></ContactLink>

				</Article>
			);
		}		
	default:
		return null;
	}
};

export default MainArticle;