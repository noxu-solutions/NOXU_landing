import styled, { DefaultThemeColorKey } from 'styled-components';
import { Col, containerCss, mediaContainerCss_2, Row } from './Containers';

export const Services = styled(Col)`
	padding: 40px 16px 56px 16px;
	border-radius: 40px;
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};
	background-color: ${({ theme }) => theme.color.white};

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 64px 80px 64px 80px;
		border-radius: 64px;
	}
`;

export const ServicesContainer = styled(Col)`
	${containerCss}
`;

export const ServiceItems = styled(Row)`
	gap: 24px;
	flex-wrap: wrap;
	margin-top: 32px;
`;

export const Service = styled(Col)<{ color: DefaultThemeColorKey; border: DefaultThemeColorKey }>`
	background-color: ${({ theme, color }) => theme.color?.[color]};
	padding: 40px;
	gap: 12px;
	border-radius: 40px;
	flex: 1;
	align-self: stretch;

	border: 1px solid ${({ theme, border }) => theme.color?.[border]};

	${mediaContainerCss_2}
`;

export const ServiceTexts = styled(Col)`
	gap: 8px;
	margin: 24px 0;
`;

export const ServiceInfoItems = styled(Row)`
	flex-wrap: wrap;
	gap: 8px;
	margin-top: auto;
	justify-content: flex-start;
`;

export const ServiceInfoItem = styled(Row)`
	background-color: ${({ theme }) => theme.color.white};
	gap: 8px;
	padding: 6px 14px;
	border-radius: 100px;
`;

export const ServiceImg = styled.img`
	height: 72px;
	width: 72px;
	border-radius: 16px;
`;
