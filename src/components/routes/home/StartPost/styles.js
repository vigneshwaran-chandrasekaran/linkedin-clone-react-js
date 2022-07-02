import styled from 'styled-components';

const Search = styled.div`
	display: flex;
`;

const SearchBox = styled.div`
	position: relative;
	width: 80%;
`;

const PlaceHolder = styled.span`
	position: absolute;
	top: 18px;
	left: 45px;
	font-size: 14px;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.6);
`;

const Input = styled.input`
	border-radius: 35px;
	width: 100%;
	height: 48px;
	margin-left: 1.5rem;
	border: 0.5px solid rgba(0, 0, 0, 0.3);
	outline: none;
	padding-left: 1rem;
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

const Links = styled.div`
	display: flex;
	padding: 0 1rem;
`;

const Item = styled.div`
	display: flex;
	padding: 0.5rem 1rem;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

const LinkText = styled.div`
	color: rgba(0, 0, 0, 0.6);
	font-weight: 700;
	line-height: 2.8rem;
	font-size: 14px;
	padding-left: 0.5rem;
`;

export { Links, Item, LinkText, Search, Input, SearchBox, PlaceHolder };
