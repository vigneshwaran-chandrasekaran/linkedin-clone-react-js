import React from 'react';
import { Box, Flex } from 'components/atoms';
import * as Styles from './styles';

const profile = [
	{ id: 1, title: `Who's viewed your profile`, count: 66 },
	{ id: 2, title: `Impressions of your post`, count: 310 },
];

function Profile() {
	return (
		<Flex flexDirection="column">
			<Box width="225px">
				<Styles.Name>Vigneshwaran Chandrasekaran</Styles.Name>
				<Styles.Designation>
					SDE II - Frontend web developer at WeKanCode knows about React, React, Node JS
				</Styles.Designation>

				<ul>
					{profile?.map((item) => (
						<Styles.Views key={item?.id}>
							<Styles.ViewTitle>{item?.title}</Styles.ViewTitle>
							<Styles.ViewCount>{item?.count}</Styles.ViewCount>
						</Styles.Views>
					))}
				</ul>
			</Box>
			<Box width="225px">
				<Styles.Name>Vigneshwaran Chandrasekaran</Styles.Name>
				<Styles.Designation>
					SDE II - Frontend web developer at WeKanCode knows about React, React, Node JS
				</Styles.Designation>
			</Box>
		</Flex>
	);
}

export default Profile;
