import styled from 'styled-components';
import { Col, containerCss, mediaContainerCss_2, Row } from './Containers';

export const Values = styled(Col)`
	padding: 40px 16px 56px 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 64px 80px 104px 80px;
	}
`;

export const ValuesContainer = styled(Col)`
	${containerCss}
`;

export const ValueItems = styled(Row)`
	gap: 24px;
	flex-wrap: wrap;
	margin-top: 32px;
`;

export const Value = styled(Col)`
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};
	padding: 16px;
	gap: 24px;
	border-radius: 24px;
	flex: 1;
	align-self: stretch;
	justify-content: flex-start;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	${mediaContainerCss_2}
`;

export const ValueImg = styled.img`
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		width: 210px;
		height: 175px;
	}
`;
