'use client';

import styled from 'styled-components';
import { Col, containerCss, Row } from './Containers';

export const CTA = styled(Col)`
	padding: 0px;

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 64px 80px 104px 80px;
	}
`;

export const CTAContainer = styled(Col)`
	${containerCss}
`;

export const CTAFormWrapper = styled(Col)`
	padding: 16px;
	border-radius: 0px;
	background-color: ${({ theme }) => theme.color.white};

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		padding: 48px 16px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		border: 1px solid ${({ theme }) => theme.color.grey_light_2};
		border-radius: 48px;
		padding: 12px;
	}
`;

export const CTAForm = styled(Col)`
	flex: 1;
	padding: 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		padding: 32px 56px;
	}
`;

export const CTAInputs = styled(Col)`
	margin: 32px 0;
	gap: 16px;
`;

export const CTANameInputs = styled(Col)`
	gap: 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
`;

export const CTAInfo = styled(Col)`
	background-color: ${({ theme }) => theme.color.light_red_2};
	border: 1px solid ${({ theme }) => theme.color.light_red};

	flex: 1;

	padding: 32px;
	gap: 10px;
	border-radius: 40px;
`;

export const CTAInfoItem = styled(Row)`
	background-color: ${({ theme }) => theme.color.white};
	padding: 16px;
	gap: 16px;
	border-radius: 12px;
	justify-content: flex-start;
`;

export const CTAListItem = styled(Row)`
	background-color: ${({ theme }) => theme.color.red};
	color: ${({ theme }) => theme.color.white};
	min-width: 32px;
	height: 32px;
	gap: 0px;
	border-radius: 10px;
	justify-content: center;
`;

export const CTAImg = styled.img`
	width: 100%;
`;
