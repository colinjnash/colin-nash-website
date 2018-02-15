import styled, { css, keyframes } from 'styled-components';
import bgimage from '../assets/Greenland.jpg';



export const slideIn = keyframes`
   from {
    opacity: 0;background: rgba(0,0,0,0);
    to {
    background: rgba(0,0,0,0.5);
  }
  `;

export const Profile = styled.img`
border-radius: 150px;
height: auto;
width: auto;
opacity: 1;
margin: 5%;
`;


export const Container = styled.div`
width: 100%;
height: 1000px;
background-image: url(${bgimage});
`;

export const NavbarWrap = styled.div`
border-bottom: 1px solid #ededed;
background: transparent;
padding: 30px;
min-height: 30px;

@media (max-width: 700px) {
border-bottom: none;
}
`;

export const Article = styled.div`
margin: 40px 10%;
width: 80%;
height: 60%;
background: rgba(0,0,0,0.5);
color: white;
animation: ${slideIn} 2s linear;
@media (max-width: 700px) {
border-bottom: none;
background: black;
animation: ${slideIn} 2s linear;
opacity: 0.5;
margin-top: 35%;
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
	position: absolute;
	  top: 20px;
    right: 0;
    height: 40px;
}
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
border: 1px solid #ededed;
color: #ededed;
height: 40px;
margin-right: 20px;
font-weight: 400;
line-height: 38px;
font-size: 16px;
touch-action: manipulation;
cursor: pointer;
padding: 0px 15px;
display: inline-block;
border-radius: 0px;
margin-top: 5px;
color: white;
&:hover {
  color: grey;
  background: white;
  transition: all 700ms;
}
@media (max-width: 700px) {
  display: block;
  width: auto;
  text-align: center;
  margin-bottom: 12px;
}
`;

export const Nav= styled.nav`
display: inline;
max-width: 80%;
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
  &:first-child(1)  ${props => props.nav == true && css `
   opacity: 1;
  transform: rotate(45deg) translate(-2px, 0px);
  background: #ededed;
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
  background: #ededed;
  `};
  }
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
`;