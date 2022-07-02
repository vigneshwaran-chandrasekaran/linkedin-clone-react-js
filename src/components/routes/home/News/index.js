import React from 'react';
import { Box } from 'components/atoms';
import { NewsTitle, NewsDate, List, Item } from './styles';

const news = [
	{
		id: 1,
		title: 'Rise in tech startup funding',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 2,
		title: 'IIT MBAs now a hot ticket',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 3,
		title: 'UK hot favourite for indian students',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 4,
		title: 'Inflation cuts clothing down to size',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 5,
		title: 'UPI transactions double in a year',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 6,
		title: 'Startups take to the stars',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 7,
		title: 'MPVs zoon ahead in india',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 8,
		title: 'Meet Indias Top voices in Social Impact',
		date: '3d ago',
		readers: '28,462',
	},
	{
		id: 9,
		title: 'New pet paw-licies at India',
		date: '3d ago',
		readers: '28,462',
	},
];

export default function News() {
	return (
		<Box width="320px">
			<List>
				{news.map((item) => (
					<Item key={item?.id}>
						<NewsTitle>{item?.title}</NewsTitle>
						<NewsDate>
							{item?.date} . {item?.readers} readers
						</NewsDate>
					</Item>
				))}
			</List>
		</Box>
	);
}
