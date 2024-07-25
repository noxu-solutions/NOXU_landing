import styled, { DefaultThemeColorKey } from 'styled-components';
import { Col } from 'components/Containers';

export const RiveAnimationContainer = styled(Col)<{ bgColor?: DefaultThemeColorKey }>`
	align-self: stretch;
	width: 100%;
	height: auto;
	aspect-ratio: 1/1.09;
	border-radius: 36px;
	background-color: ${({ theme, bgColor }) => (bgColor ? theme.color?.[bgColor] : theme.color.transparent)};

	canvas {
		border-radius: 36px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		min-width: 48%;
	}
`;
