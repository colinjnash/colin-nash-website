import styled, { css, keyframes } from 'styled-components';


export const ArticleTitle = styled.h2`
grid-column: 1/-1;
display: grid;
font-weight: 200;
font-size: 2em;
position: flex;
letter-spacing: 1px;
vertical-align: top;
text-align: center;
color: #2e2e2e;
@media (max-width:1080px) {
	display: flex;
	align-items: center;
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 1;
}
`;

export const AboutP1 = styled.p`
grid-column: 2/5;
grid-row: 2;
margin: 5%;
display: flex;
line-height: 1.2;
align-items: center;
font-size: 16px;
@media (max-width:1100px) {
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 2;
	width: 80%;
}
`;
export const AboutP2 = styled.p`
grid-column: 1/2;
grid-row: 3;
margin: 5%;
display: flex;
line-height: 1.2;
align-items: center;
font-size: 16px;
@media (max-width:1100px) {
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 4;
	width: 80%;
}
`;

export const AboutP3 = styled.p`
grid-column: 2/5;
grid-row: 4;
margin: 5%;
display: flex;
line-height: 1.2;
align-items: center;
font-size: 16px;
@media (max-width:1100px) {
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 6;
	width: 80%;
}
`;

export const AboutImg1 = styled.img`
grid-column: 1;
grid-row: 2;
height: 300px;;
width: auto;
margin: 2%;
@media (max-width:1100px) {
	display: flex;
justify-self: center;
	width: 100%;
	height: auto;
	grid-column: 1/5;
	grid-row: 3;
	grid-row-gap: 1em;
	margin: 5%;
}
`;

export const AboutImg2 = styled.img`
grid-column: 3/5;
grid-row: 3;
height: 300px;
width: auto;
margin: 2%;
display: flex;
justify-self: end;
@media (max-width:1100px) {
		width: 100%;
		height: auto;
			display: flex;
justify-self: center;
	height: auto;
	grid-column: 1/5;
	grid-row: 5;
		margin: 5%;
}
`;

export const AboutImg3 = styled.img`
grid-column: 1/2;
grid-row: 4;
height: 300px;
width: auto;
display: flex;
justify-self: end;
margin: 2%;
@media (max-width:1100px) {
		width: 100%;
		height: auto;
			display: flex;
justify-self: center;
	height: auto;
	grid-column: 1/5;
	grid-row: 7;
		margin: 5%;
}
`;