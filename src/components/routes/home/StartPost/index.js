import React from 'react';
import { Box, Image } from 'components/atoms';
import photo from 'assets/photo.svg';
import video from 'assets/video.svg';
import event from 'assets/event.svg';
import article from 'assets/article.svg';
import profile from 'assets/profile.jpeg';
import { Links, Item, LinkText, Search, Input, SearchBox, PlaceHolder } from './styles';

const types = [
	{ id: 1, icon: photo, content: 'Photo' },
	{ id: 2, icon: video, content: 'Video' },
	{ id: 3, icon: event, content: 'Event' },
	{ id: 4, icon: article, content: 'Write article' },
];

export default function StartPost() {
	return (
		<Box m="0 1rem 0.5rem 1rem" p="1rem" pb="0">
			<Search>
				<Image width={48} height={48} circle src={profile} />
				<SearchBox>
					<Input />
					<PlaceHolder>Start a post</PlaceHolder>
				</SearchBox>
			</Search>

			<Links>
				{types?.map((item) => (
					<Item key={item?.id}>
						<Image width={24} height={24} src={item?.icon} />
						<LinkText>{item?.content}</LinkText>
					</Item>
				))}
			</Links>
		</Box>
	);
}
