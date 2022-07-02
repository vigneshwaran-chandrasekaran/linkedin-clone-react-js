import styled, { css } from 'styled-components';

const Image = styled.img.attrs((props) => ({
	src: props.src,
}))`
	height: auto;
	border-radius: 8px;
	${(props) =>
		props.width !== undefined &&
		css`
			width: props.width;
		`}
	${(props) =>
		props.circle !== undefined &&
		css`
			border-radius: 50%;
		`}
`;

export default Image;
