import styled, { css, keyframes } from 'styled-components';


export const ArticleTitle = styled.h2`
grid-column: 1/-1;
display: grid;
font-weight: 200;
font-size: 2em;
letter-spacing: 1px;
vertical-align: top;
text-align: center;
color: #2e2e2e;
padding-bottom: 10px;
@media (max-width:1100px) {
	display: flex;
	align-items: center;
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 1;
}
`;

export const AboutP1 = styled.p`
grid-column: 3/5;
grid-row: 2;
margin: 0 18%;
display: flex;
line-height: 1.2;
align-items: center;
font-size: 16px;
justify-self: center;
width: 532px;
@media (max-width:1100px) {
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 2;
	width: 80%;
	margin: 10%;
	padding: 8%;
	text-align: center;
}
`;
export const AboutP2 = styled.p`
grid-column: 1/3;
grid-row: 3;
margin: 0 18%;
display: flex;
line-height: 1.2;
align-items: center;
font-size: 16px;
justify-self: center;
width: 532px;
@media (max-width:1100px) {
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 4;
	width: 80%;
	margin: 10%;
	padding: 8%;
	text-align: center;
}
`;

export const AboutP3 = styled.p`
grid-column: 3/5;
grid-row: 4;
margin: 0 18%;
display: flex;
line-height: 1.2;
align-items: center;
font-size: 16px;
justify-self: center;
width: 532px;
@media (max-width:1100px) {
	margin: 20px auto;
	grid-column: 1/5;
	grid-row: 6;
	width: 80%;
	margin: 10%;
	padding: 8%;
	text-align: center;
}
`;

export const AboutImg1 = styled.img`
grid-column: 1/3;
grid-row: 2;
height: 300px;
width: auto;
margin: 2%;
justify-self: center;
width: 532px;
@media (max-width:1100px) {
	display: flex;
justify-self: center;
	width: 90%;
	height: auto;
	grid-column: 1/5;
	grid-row: 3;
	grid-row-gap: 1em;
	margin: 0;
}
`;

export const AboutImg2 = styled.img`
grid-column: 3/5;
grid-row: 3;
height: 300px;
width: auto;
margin: 2%;
display: flex;
justify-self: center;
@media (max-width:1100px) {
		width: 90%;
		height: auto;
			display: flex;
justify-self: center;
	height: auto;
	grid-column: 1/5;
	grid-row: 5;
		margin: 0;
}
`;

export const AboutImg3 = styled.img`
grid-column: 1/3;
grid-row: 4;
height: 300px;
width: auto;
display: flex;
justify-self: center;
margin: 2%;
@media (max-width:1100px) {
		width: 90%;
		height: auto;
			display: flex;
justify-self: center;
	height: auto;
	grid-column: 1/5;
	grid-row: 7;
		margin: 0;
}
`;