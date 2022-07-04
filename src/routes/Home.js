import React from 'react';
import styled from 'styled-components';
import { News, StartPost, Links } from 'components/routes/home';
import { Flex } from 'components/atoms';

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export default function Home() {
	return (
		<Container>
			<News />
			<StartPost />
			<Flex flexDirection="column" alignItems="center">
				<News />
				<Links />
			</Flex>
		</Container>
	);
}
