import styled from 'styled-components';

const Name = styled.div`
	font-weight: 700;
	max-width: 150px;
	color: rgba(0, 0, 0, 0.9);
	font-size: 16px;
	text-align: center;
	line-height: 1.25rem;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

const Designation = styled.div`
	max-width: 150px;
	color: rgba(0, 0, 0, 0.6);
	font-size: 12px;
	text-align: center;
	line-height: 0.85rem;
	padding-top: 0.4rem;
`;

export { Name, Designation };
