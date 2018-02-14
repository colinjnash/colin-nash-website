import React from 'react';
import {ArticleImg, ImgDiv} from '../styles/styles';

const MainArticle = (props) => {

	return (
		<ImgDiv>
			<ArticleImg src={require('../assets/Greenland.jpg')} />
		</ImgDiv>
	);
};

export default MainArticle;