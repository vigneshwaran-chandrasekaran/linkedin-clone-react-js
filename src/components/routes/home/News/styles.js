import styled from 'styled-components';

const NewsTitle = styled.div`
	font-weight: 600;
	padding-bottom: 0.5rem;
`;

const NewsDate = styled.div`
	font-size: 12px;
	color: rgba(0, 0, 0, 0.6);
	padding-bottom: 0.75rem;
`;

const List = styled.ul`
	list-style: outside;
	padding-left: 2rem;
`;

const Item = styled.li`
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

export { NewsTitle, NewsDate, List, Item };
