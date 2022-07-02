import styled, { css } from 'styled-components';

const Box = styled.div`
	border-radius: 0.8rem;
	background-color: #fff;
	box-shadown: 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
`;

export default Box;
