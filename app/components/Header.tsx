'use client';

import styled from 'styled-components';
import { containerCss, Row } from './Containers';

export const Header = styled(Row)`
	background-color: ${({ theme }) => theme.color.white};
	height: 64px;
	padding: 0px 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 0px 80px;
	}
`;

export const HeaderContainer = styled(Row)`
	${containerCss}
`;

export const HeaderNav = styled(Row)`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		display: block;

		ul {
			display: flex;
			gap: 40px;
			margin-right: 32px;
		}
	}
`;

export const HeaderLogo = styled.img`
	width: 102px;
	height: 45px;
`;
