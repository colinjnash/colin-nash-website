import styled from 'styled-components';
import bgimage from '../assets/Greenland.jpg';

export const Container = styled.div`
width: 100%;
height: 1000px;
background-image: url(${bgimage});
`;

export const NavbarWrap = styled.div`
background: transparent;
padding: 10px;
border: none;
min-height: 30px;
`;

export const NavSpan = styled.span`
border: 3px solid white;
margin: 5px 10px;
padding: 8px;
display: inline-block;
border-radius: 10px;
margin-top: 5px;
color: white;
&:hover {
	color: grey;
	background: white;
	transition: all .5s;
}

`;

export const LangWrap = styled.span`
border: 3px solid white;
margin: 5px 10px;
padding: 8px;
display: inline-block;
border-radius: 10px;
margin-top: 10px;
color: white;
&:hover {
	color: grey;
	background: white;
	transition: all .5s;
}
float: right;
`;

export const ArticleImg = styled.img`
width: 100%;
height: auto;
position: relative;
`;

export const ImgDiv = styled.div`
`;