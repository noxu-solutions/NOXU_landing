import styled, { css } from 'styled-components';

export const PreloaderWrapper = styled.div<{ loaded?: boolean }>`
	position: fixed;
	width: 100%;
	height: 100%;
	background: #fff;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;

	${({ loaded }) =>
		loaded &&
		css`
			display: none;
		`}
`;
