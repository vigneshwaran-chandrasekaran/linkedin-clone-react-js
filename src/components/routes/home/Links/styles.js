import styled from 'styled-components';
import { Link as A } from 'react-router-dom';

const Links = styled.div`
	display: flex;
	justify-content: center;
	max-width: 250px;
	flex-wrap: wrap;
	margin-top: 1rem;
`;

const Link = styled(A)`
	font-size: 12px;
	padding-bottom: 0.5rem;
	color: rgba(0, 0, 0, 0.6);
	text-decoration: none;
	margin: 0.4rem 1rem;
	padding: 0;

	&:hover {
		text-decoration: underline;
	}
`;

export { Links, Link };
