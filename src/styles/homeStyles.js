import styled, { css, keyframes } from 'styled-components';
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

export const Profile = styled.img`
border-radius: 150px;
height: 200px;
width: 200px;
opacity: 1;
grid-column: 1/2;
display: flex;
justify-self: center;
margin: 3% 0;
@media (max-width: 800px) {
  padding: 5px;
  border-radius: 200px;
  opacity: 1;
  grid-column: 1/4;
}
`;


export const Name = styled.h1`
grid-column: 1/5;
grid-row: 2;
display: flex;
justify-self: center;
font-weight: 200;
font-size: 2em;
letter-spacing: 1px;
vartical-align: top;
text-align: center;
margin: 0 auto;
color: #2e2e2e;
@media (max-width: 780px) {
  grid-column: 1/5;
  grid-row: 1;
  padding-top: 0;
   font-size: 1.5em;
}
`;

export const Ahr = styled.hr`
width: 90%;
display: flex;
justify-self: center;
text-align: center;
grid-column: 1/5;
grid-row: 3;
  border: 0; 
  height: 1px; 
  animation: ${warpOut} 1.5s linear;
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
}
@media (max-width: 800px) {
  grid-column: 1/5;
  grid-row: 2;
}

`;
export const Title = styled.h2`
grid-column: 1/5;
grid-row: 4;
justify-self: center;
font-weight: 200;
font-size: 2em;
letter-spacing: 1px;
vartical-align: top;
text-align: center;
margin: 0 auto;
color: #2e2e2e;
display: flex;
@media (max-width: 800px) {
  grid-column: 1/5;
  grid-row: 3;
  text-align: center;
  margin-bottom: 12px;
  font-size: 1.5em;
}
`;