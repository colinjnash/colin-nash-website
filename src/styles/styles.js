import styled from 'styled-components';
import bgimage from '../assets/Greenland.jpg';

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
`;

export const BurgerSpan = styled.ul`
display: inline;
max-width: 80%;
`;

export const Nav= styled.nav`
display: inline;
max-width: 80%;
`;
export const ArticleImg = styled.img`
width: 100%;
height: auto;
position: relative;
`;

export const ImgDiv = styled.div`
`;
