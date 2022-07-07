import React from 'react';
import { Box } from 'components/atoms';
import * as Styles from './styles';

function Profile() {
	return (
		<Box width="225px">
			<Styles.Name>Vigneshwaran Chandrasekaran</Styles.Name>
			<Styles.Designation>
				SDE II - Frontend web developer at WeKanCode knows about React, React, Node JS
			</Styles.Designation>
		</Box>
	);
}

export default Profile;
