'use client';

import styled from 'styled-components';
import { Col, containerCss, Row } from './Containers';
import { Paragraph } from './Typography';

export const Works = styled(Col)`
	padding: 40px 16px 56px 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 64px 80px;
	}
`;

export const WorksContainer = styled(Col)`
	align-items: center;

	${containerCss}
`;

export const WorkItems = styled(Col)`
	gap: 32px;
	flex-wrap: wrap;
	margin-top: 56px;
`;

export const Work = styled(Col)`
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};
	padding: 12px;
	gap: 24px;
	border-radius: 48px;
	flex: 1;
	align-self: stretch;
	flex-direction: column-reverse;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
`;

export const WorkTexts = styled(Col)`
	padding: 32px;
	align-self: stretch;
	gap: 8px;
`;

export const WorkFlagImg = styled.img`
	width: 24px;
	margin-right: 6px;
`;

export const WorkSpecs = styled(Col)`
	margin: 32px 0 24px;
	gap: 8px;
`;

export const WorkSpecsRow = styled(Row)`
	justify-content: flex-start;
	align-items: flex-start;
	gap: 12px;

	${Paragraph} {
		&:first-child {
			min-width: 104px;
		}
	}
`;

export const WorkImg = styled.img`
	width: 100%;
	border-radius: 36px;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		width: 48%;
	}
`;

export const WorkStack = styled(Row)`
	justify-content: flex-start;
	gap: 8px;
	margin-top: auto;
`;

export const WorkStackImg = styled.img`
	height: 88px;
	border-radius: 12px;
`;
