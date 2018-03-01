import styled, { css, keyframes } from 'styled-components';


export const AboutTitle = styled.h2`
grid-column: 1/-1;
display: grid;
font-weight: 200;
font-size: 2em;
position: flex;
letter-spacing: 1px;
vertical-align: top;
text-align: center;
color: #2e2e2e;
`;

export const ContactP = styled.p`
font-family: 'icomoon';
justify-self: center;
font-size: 3em;
&:hover{
	color: red;
	transition: color 300ms;
}
`

export const ContactLink = styled.a`
text-decoration: none;
justify-self: center;
color: #2e2e2e;
&:visited{
color: #2e2e2e;
}
`;