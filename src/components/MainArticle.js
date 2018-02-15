import React from 'react';
import {Article, Profile} from '../styles/styles';

const MainArticle = (props) => {

	if (props.display == 'Home') {

		return (
			<Article>
				<Profile src={require('../assets/Profile_Main.png')} />
			</Article>
		);
	}
	return null;

};

export default MainArticle;