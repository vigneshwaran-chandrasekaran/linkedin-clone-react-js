import React from 'react';
import * as Styles from './styles';

const links = [
	{ id: 1, title: 'About', path: '/' },
	{ id: 2, title: 'Accessibility', path: '/' },
	{ id: 3, title: 'Help Center', path: '/' },
	{ id: 4, title: 'Privacy & Terms', path: '/' },
	{ id: 5, title: 'Ad Choices', path: '/' },
	{ id: 6, title: 'Advertising', path: '/' },
	{ id: 7, title: 'Business Services', path: '/' },
	{ id: 8, title: 'Get the LinkedIn app', path: '/' },
	{ id: 9, title: 'More', path: '/' },
];

export default function Links() {
	return (
		<Styles.Links>
			{links.map((item) => (
				<Styles.Link to={item?.path} key={item?.id}>
					{item?.title}
				</Styles.Link>
			))}
		</Styles.Links>
	);
}
