import React from 'react';
import styled from 'styled-components';
import { News } from 'components/routes/home';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function Home() {
	return (
		<Container>
			<News />
			<News />
			<News />
		</Container>
	);
}
