import styled, { css, keyframes } from 'styled-components';
import bgimage from '../assets/background-colin.jpg';
import cover from '../assets/About_Cover.jpg';
import contact from '../assets/Greenland.jpg';
import portfolio from '../assets/port-cover.jpg';
import styles from './styles.css';


export const slideIn = keyframes`
   from {
    opacity: 0;background: rgba(0,0,0,0);
    to {
    background: rgba(0,0,0,0.3);
  }
  `;

export const warpOut = keyframes`
   from {
    width: 0%;
    to {
    width: 90%;
  }
  `;

export const Nav= styled.nav`
display: inline;
max-width: 80%;
`;


export const Container = styled.div`
width: auto;
height: 700px;
@media (max-width: 780px) {
height: 450px;
}
`;

export const Header = styled.div`
display: grid;
width: 100%;
height: 100%;
-webkit-transition: background-image 0.2s ease-in-out;
transition: background-image 300ms ease-in-out;
  ${props => (props.display == 'Home' || props.display == 'Accueil') && css `
  -webkit-transition: background-image 0.2s ease-out;
transition: background-image 300ms ease-out;
  background-image: url(${bgimage});
background-position:center;
background-size: cover
  `};
  ${props => (props.display == 'About' || props.display == 'À Propos') && css `
  -webkit-transition: background-image 300ms ease-out;
transition: background-image 300ms ease-out;
  background-image: url(${cover});
background-position:center;
background-size:cover;

  `};
    ${props => (props.display == 'Portfolio' || props.display == 'Réalisations') && css `
  -webkit-transition: background-image 300ms ease-out;
transition: background-image 300ms ease-out;
  background-image: url(${portfolio});
background-position:center;
background-size:cover;

  `};
    ${props => (props.display == 'Contact') && css `
  -webkit-transition: background-image 0.2s ease-in-out;
transition: background-image 0.2s ease-in-out ;
  background-image: url(${contact});
background-position:center;
background-size:cover;

  `};

  ${props => props.nav == true && css `
  -webkit-filter: grayscale(100%);
         filter: gray;

    `};

@media (max-width: 1600px) {
  height: 65%;
}
@media (max-width: 780px) {
background-size: cover;
width:auto;
height: 70%;
}
`;

export const Article = styled.div`
margin: 0px auto;
width: auto;
height: auto;
display: grid;
grid-template-columns: 2fr 2fr 2fr 2fr;
grid-template-rows: auto;
background: transparent;
animation: ${slideIn} 700ms linear;
@media (max-width: 800px) {
border-bottom: none;
background: transparent;
animation: ${slideIn} 700ms linear;
margin-left: auto;
margin-right: auto;
grid-template-columns: auto;
grid-template-rows: auto
}

`;

export const ArticleWrap = styled.div`
grid-column: 2/5;
display: grid;
justify-self: center;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
;
width: 100%;
margin: auto;
@media (max-width: 780px) {
grid-column: 1/4;
grid-row: 2;
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

@media (max-width: 780px) {
width: 82%;
}
`;

export const NavDiv = styled.div`
display: none;
@media (max-width: 780px) {
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
@media (max-width: 780px) {
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

@media (max-width: 780px) {
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
border-bottom: 5px solid #ededed;
  transition: all 300ms;
}
@media (max-width: 780px) {
  background: rgba(0,0,0,0.5);
  height: 22px;
  margin-right: 20px;
  font-weight: 600;
  line-height: 20px;
  font-size: 15px;
  font-weight: 200;
  touch-action: manipulation;
  cursor: pointer;
  padding: 0px 15px;
  display: block;
  width: auto;
  text-align: center;
  margin-bottom: 12px;
  margin-right: 0px;
  margin-left: -25px;
  &:hover {
border-bottom: 1px solid #2e2e2e;
  transition: all 100ms;
}
}
${props => (props.display == 'About' || props.display == 'À Propos') && css` 
transition: all 1s;
color: #0e0b0d;
border-bottom: 1px solid #2e2e2e;
 &:hover {
border-bottom: 5px solid #2e2e2e;
  transition: all 100ms;
}
@media (max-width: 780px) {
background: rgba(0,0,0,0.5);
color: #ededed;
border-bottom: 1px solid #ededed;
  &:hover {
border-bottom: 1px solid #2e2e2e;
  transition: all 300ms;
}
}
`}
${props => (props.display == 'Portfolio' || props.display == 'Réalisations') && css` 
transition: all 1s;
color:  #2e2e2e;
border-bottom: 1px solid #2e2e2e;
 &:hover {
border-bottom: 5px solid #2e2e2e;
  transition: all 100ms;
}
@media (max-width: 780px) {
color: #ededed;
 &:hover {
border-bottom: 1px solid #2e2e2e;
  transition: all 100ms;
}
}
`}
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
background: #2e2e2e;
`}
${props => (props.display == 'Portfolio' || props.display == 'Réalisations') && css` 
transition: all 1s;
background: #2760bc;
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