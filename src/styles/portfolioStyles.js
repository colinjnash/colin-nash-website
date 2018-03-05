import styled, { css, keyframes } from 'styled-components';


export const PortTitle = styled.h2`
grid-column: 1/5;
grid-row:1;
font-weight: 200;
font-size: 2em;
position: flex;
letter-spacing: 1px;
vertical-align: top;
text-align: center;
color: #2e2e2e;
`;

export const ProjectTitle =styled.h3`
grid-column: 1/5;
grid-row: 2;
font-weight: 200;
font-size: 1.5em;
position: flex;
letter-spacing: 1px;
vertical-align: top;
text-align: center;
color: #2e2e2e;
`;

export const GitTitle =styled.h3`
grid-column: 1/5;
grid-row: auto;
font-weight: 200;
font-size: 1.5em;
position: flex;
letter-spacing: 1px;
vertical-align: top;
text-align: center;
color: #2e2e2e;
`;

export const PortP = styled.p`
grid-column: 2/4;
margin:2%;
grid-row: auto;
padding: 5px;
font-weight: 200;
position: flex;
letter-spacing: 1px;
text-align: center;
vertical-align: top;
color: #2e2e2e;
@media(max-width: 780px) {
	text-align: center;
	font-size: .8em;
}
`;

export const GitUList = styled.ul`
grid-column: 1/5;
grid-row:auto;
font-weight: 200;
position: flex;
padding: 0;
letter-spacing: 1px;
margin: 2px auto;
vertical-align: top;
color: #2e2e2e;
list-style-type: none; 
`;
export const GitList = styled.li`
margin: 0px auto;
font-weight: 200;
font-size: .8em;
padding: 5px;
position: flex;
letter-spacing: 1px;
text-align: left;
vertical-align: top;
color: #2e2e2e;
list-style-type: none; 
@media(max-width: 780px) {
	text-align: center;
	font-size: .6em;
}
`;

export const GithubP = styled.p`
grid-column: 1/5;
justify-self: center;
grid-row: auto;
font-size: 1.4em;


`;

export const GithubLink = styled.a`
text-decoration: none;
justify-self: center;
display: flex;
grid-column: 1/5;
color: #2e2e2e;
&:visited{
color: #2e2e2e;
}
&:before{
	font-family: 'icomoon';
	content: '\\eab0';
    padding-right: 3px;
    font-size: 2em;
    display:flex;
    margin: auto 5px;
}
&:hover{
	color: #6e5494;
	transition: all 300ms;
}
`;

export const GalapagosImg = styled.img`
grid-column: 1/5;
grid-row: 3;
display: flex;
align-items: center;
margin: 3% auto;
@media(max-width: 780px) {
	margin:5% auto;
}
`;

export const GalapagosImg2 = styled.img`
grid-column: 2/3;
grid-row: 4;
display: flex;
align-items: center;
justify-self:start;
height: 300px;
@media (max-width: 980px){
	grid-column: 1/5;
	grid-row: 4;
		justify-self:center;
}
@media (max-width:780px) {
	justify-self:center;
	width:100%;
	height: auto;
	grid-column:1/5;
	grid-row:4;
	margin: 5% 0px;
}
`;

export const GalapagosImg3 = styled.img`
grid-column: 3/4;
grid-row: 4;
display: flex;
align-items: center;
justify-self:end;
height: 300px;
@media (max-width: 980px){
	grid-column: 1/5;
	grid-row:5;
		justify-self:center;
}
@media (max-width:780px) {
	justify-self:center;
	width:100%;
	height: auto;
	grid-column:1/5;
	grid-row:5;
	padding-bottom: 5%;
}
`;