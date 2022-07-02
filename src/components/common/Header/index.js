import React from 'react';
import * as Styled from './styles';
import { Image } from 'components/atoms';
import home from 'assets/home.svg';
import myNetwork from 'assets/my-network.svg';
import jobs from 'assets/jobs.svg';
import messaging from 'assets/messaging.svg';
import notification from 'assets/notification.svg';
import linkedIn from 'assets/in.svg';

export default function Header() {
	return (
		<div>
			<Styled.Header>
				<Image width={36} height={36} src={linkedIn} />
				<Styled.Search placeholder="Search" />
				<Styled.Links>
					<Styled.Link to="/">
						<Image width={24} height={24} src={home} />
						<Styled.LinkText>Home</Styled.LinkText>
					</Styled.Link>
					<Styled.Link to="/mynetwork">
						<Image width={24} height={24} src={myNetwork} />
						<Styled.LinkText>My Network</Styled.LinkText>
					</Styled.Link>
					<Styled.Link to="/jobs">
						<Image width={24} height={24} src={jobs} />
						<Styled.LinkText>Jobs</Styled.LinkText>
					</Styled.Link>
					<Styled.Link to="/messaging">
						<Image width={24} height={24} src={messaging} />
						<Styled.LinkText>Messaging</Styled.LinkText>
					</Styled.Link>
					<Styled.Link to="/notifications">
						<Image width={24} height={24} src={notification} />
						<Styled.LinkText>Notifications</Styled.LinkText>
					</Styled.Link>
				</Styled.Links>
				<Styled.Premium to="/">Try Premium for free</Styled.Premium>
			</Styled.Header>
		</div>
	);
}
