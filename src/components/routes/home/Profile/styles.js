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

const Views = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	padding: 0.3rem 1.2rem;

	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

const ViewTitle = styled.div`
	color: rgba(0, 0, 0, 0.6);
	font-size: 12px;
	font-weight: 700;
`;

const ViewCount = styled.div`
	color: ${(props) => props.theme.colors.primary};
	font-size: 12px;
	line-height: 16px;
	font-weight: 700;
`;

export { Name, Designation, Views, ViewTitle, ViewCount };
