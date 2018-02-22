import styled, { css, keyframes } from 'styled-components';
import bgimage from '../assets/background-colin.png';
import cover from '../assets/About_Cover.png';
import contact from '../assets/Greenland.png'
import portfolio from '../assets/portfolio-cover.png';
import styles from './styles.css';


export const slideIn = keyframes`
   from {
    opacity: 0;background: rgba(0,0,0,0);
    to {
    background: rgba(0,0,0,0.3);
  }
  `;

export const Profile = styled.img`
border-radius: 150px;
height: 150px;
width: 150px;
opacity: 1;
margin: none;
margin-left: 10%;
float: left;
display: inline;
position: relative;
padding: 0px;
@media (max-width: 770px) {
  padding: 20px;
  padding-bottom: 5px;
  border-radius: 200px;
  float:none;
  display: block;
  margin-left:auto;
  margin-right:auto;
  opacity: 1;
}
`;

export const Nav= styled.nav`
display: inline;
max-width: 80%;
`;


export const Container = styled.div`
width: 100%;
height: 700px;

`;

export const Header = styled.div`
width: 100%;
height: 95%;
-webkit-transition: background-image 0.2s ease-in-out;
transition: background-image 300ms ease-in-out;
  ${props => (props.display == 'Home' || props.display == 'Accueil') && css `
  -webkit-transition: background-image 0.2s ease-out;
transition: background-image 300ms ease-out;
  background-image: url(${bgimage});
position: relative;
background-size: cover;
  `};
  ${props => (props.display == 'About' || props.display == 'À Propos') && css `
  -webkit-transition: background-image 300ms ease-out;
transition: background-image 300ms ease-out;
  background-image: url(${cover});
position: relative;
background-size: cover;

  `};
    ${props => (props.display == 'Portfolio' || props.display == 'Réalisations') && css `
  -webkit-transition: background-image 300ms ease-out;
transition: background-image 300ms ease-out;
  background-image: url(${portfolio});
position: relative;
background-size: cover;

  `};
    ${props => (props.display == 'Contact') && css `
  -webkit-transition: background-image 0.2s ease-in-out;
transition: background-image 0.2s ease-in-out;
  background-image: url(${contact});
position: relative;
background-size: cover;

  `};
@media (max-width: 700px) {
background-size: contain no-repeat;
width:auto;
height: 40%;
}
`;

export const NavbarWrap = styled.div`
background: transparent;
padding: 30px;
min-height: 30px;
position:absolute;

width: 95%;
  ${props => (props.display == 'About' || props.display == 'À Propos') && css `
  transition: all 1s;
  color: #0e0b0d;
  `};

@media (max-width: 700px) {
width: 82%;
}
`;

export const Article = styled.div`
margin: 0px auto;
width: 100%;
min-height: 200px;
background: transparent;
animation: ${slideIn} 700ms linear;
@media (max-width: 700px) {
border-bottom: none;
background: transparent;
animation: ${slideIn} 700ms linear;
padding-top: 5%;
margin-left: auto;
margin-right: auto;
width: 90%;
}

`;


export const NavDiv = styled.div`
display: none;
@media (max-width: 700px) {
  display: block;
}
`;


export const LangWrap = styled.span`
border: 1px solid #ededed;
color: #ededed;
height: 40px;
line-height: 38px;
font-size: 16px;
margin: 5px 10px;
padding: 0px 15px;
display: inline-block;
border-radius: 0px;
touch-action: manipulation;
cursor: pointer;
color: white;
&:hover {
	color: grey;
	background: white;
	transition: all 700ms;
}
float: right;
@media (max-width: 700px) {
  margin-top: 0px;
	position: absolute;
	  top: 20px;
    right: 0;
    height: 40px;

    // About color 0e0b0d
}
${props => (props.display == 'About' || props.display == 'À Propos')  && css` 
transition: all 1s;
color: #0e0b0d;
border: 1px solid #0e0b0d;
&:hover {
  color: white;
  background: #0e0b0d;
  transition: all 700ms;
}
`}
${props => (props.display == 'Portfolio' || props.display == 'Réalisations')  && css` 
transition: all 1s;
color: #0e0b0d;
border: 1px solid #0e0b0d;
&:hover {
  color: white;
  background: #0e0b0d;
  transition: all 700ms;
}
`}
`;

export const BurgerUl = styled.ul`
display: inline;
max-width: 80%;

@media (max-width: 700px) {
  position: absolute;
  display: block;
  margin-left: 0px;
  padding-left: 0px;
  transition: all 2s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  opacity: 1;
  ${props => props.nav == false && css `
  opacity: 0;
  transition: all 1s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  `};
}
`;

export const NavSpan = styled.li`
border-bottom: 1px solid #ededed;
color: #ededed;
height: 30px;
line-height: 38px;
font-size: 16px;
margin-right: 20px;
font-weight: 400;
line-height: 20px;
touch-action: manipulation;
cursor: pointer;
padding: 0px 15px;
display: inline-block;
border-radius: 0px;
margin: 10px;
color: white;
&:hover {
  color: grey;
border-bottom: 5px solid #ededed;
  transition: all 300ms;
}
@media (max-width: 700px) {
  height: 22px;
  margin-right: 20px;
  font-weight: 400;
  line-height: 20px;
  font-size: 12px;
  touch-action: manipulation;
  cursor: pointer;
  padding: 0px 15px;
  display: block;
  width: auto;
  text-align: center;
  margin-bottom: 12px;
  margin-right: 0px;
  margin-left: -25px;
}
${props => (props.display == 'About' || props.display == 'À Propos') && css` 
transition: all 1s;
color: #0e0b0d;
border-bottom: 1px solid #0e0b0d;
&:hover {
  color: grey;
border-bottom: 5px solid #0e0b0d;
  transition: all 300ms;
}
`}
${props => (props.display == 'Portfolio' || props.display == 'Réalisations') && css` 
transition: all 1s;
color: #0e0b0d;
border-bottom: 1px solid #0e0b0d;
&:hover {
  color: grey;
border-bottom: 5px solid #0e0b0d;
  transition: all 300ms;
}
`}
`;

export const Name = styled.h1`
padding-top: 2%;
font-weight: 200;
font-size: 2em;
position: flex;
letter-spacing: 1px;
vartical-align: top;
text-align: center;
margin-bottom: 1%;
@media (max-width: 770px) {
  display: block;
  padding-top: 0;
}
`;

export const Title = styled.h2`
font-weight: 200;
font-size: 2em;
position: flex;
margin-top: 1%;
letter-spacing: 1px;
vartical-align: top;
text-align: center;
@media (max-width: 770px) {
  display: block;
  width: auto;
  text-align: center;
  margin-bottom: 12px;
}
`;

export const Ahr = styled.hr`
width: auto;
  border: 0; 
  height: 1px; 
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
      position: inherit;
}

`;

export const MenuLine = styled.span`
 display: block;
  width: 30px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #ededed;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  ${props => (props.display == 'About' || props.display == 'À Propos') && css` 
transition: all 1s;
background: #0e0b0d;
`}
${props => (props.display == 'Portfolio' || props.display == 'Réalisations') && css` 
transition: all 1s;
background: #0e0b0d;
`}
  &:first-child(1)  ${props => props.nav == true && css `
   opacity: 1;
  transform: rotate(45deg) translate(-2px, 0px);
  `};
  &:nth-last-child(2){
    ${props => props.nav == true && css `
     opacity: 0;
     transform: rotate(0deg) scale(0.2, 0.2);
  `};
  }
   &:nth-child(3){
    ${props => props.nav == true && css `
      opacity: 1;
  transform: rotate(-45deg) translate(-2px, -2px);
  `};
  }
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
`;