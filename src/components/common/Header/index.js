import React from 'react';
import * as Styled from './styles';
import { Image } from 'components/atoms';
import home from 'assets/home.svg';
import myNetwork from 'assets/my-network.svg';
import jobs from 'assets/jobs.svg';
import messaging from 'assets/messaging.svg';
import notification from 'assets/notification.svg';

export default function Header() {
	return (
		<div>
			<Styled.Header>
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
			</Styled.Header>
		</div>
	);
}
