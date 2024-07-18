import styled from 'styled-components';
import { Col } from 'components/Containers';

export const RiveAnimationContainer = styled(Col)`
	align-self: stretch;
	width: 100%;
	height: auto;
	aspect-ratio: 1/1.09;

	canvas {
		border-radius: 36px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		min-width: 48%;
	}
`;
