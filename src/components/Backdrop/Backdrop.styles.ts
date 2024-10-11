import styled from 'styled-components';
import { Col } from 'components/Containers';

export const Backdrop = styled(Col)<{ transparent?: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	justify-content: flex-start;
	align-items: flex-start;

	background-color: ${({ theme, transparent }) => (transparent ? 'transparent' : theme.color.backdrop)};
	z-index: 10;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		justify-content: center;
		align-items: center;
	}
`;
