import React from 'react';
import styled from 'styled-components';
import { News, StartPost } from 'components/routes/home';

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
			<News />
		</Container>
	);
}
