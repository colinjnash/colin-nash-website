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
	text-align: left;
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
text-align: center;
vertical-align: top;
color: #2e2e2e;
list-style-type: none; 
`;
export const GitList = styled.li`
margin: auto;
font-weight: 200;
padding: 5px;
margin-bottom: 3%;
position: flex;
letter-spacing: 1px;
text-align: center;
vertical-align: top;
color: #2e2e2e;
list-style-type: none; 
@media(max-width: 780px) {
	text-align: center;
	font-size: .6em;
}
`;

export const GalapagosImg = styled.img`
grid-column: 1/5;
grid-row: 3;
display: flex;
align-items: center;
margin: 2% auto;
padding: 2%;
`;

export const GalapagosImg2 = styled.img`
grid-column: 2/3;
grid-row: 4;
display: flex;
align-items: center;
justify-self:start;
max-height: 300px;
@media (max-width:980px) {
	justify-self:center;
	width:80%;
	grid-column:1/5;
	grid-row:4;
}
`;

export const GalapagosImg3 = styled.img`
grid-column: 3/4;
grid-row: 4;
display: flex;
align-items: center;
justify-self:end;
max-height: 300px;
@media (max-width:980px) {
	justify-self:center;
	width:80%;
	grid-column:1/5;
	grid-row:5;
}
`;