import React from 'react';
import { Image } from 'components/atoms';
import linkedIn from 'assets/linked-in.svg';
import { Container, Content } from './styles';

export default function Copyright() {
	return (
		<Container>
			<Image width={56} height={14} src={linkedIn} />
			<Content>LinkedIn Corporation © 2022</Content>
		</Container>
	);
}
