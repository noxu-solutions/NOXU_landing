'use client';
import styled from 'styled-components';
import { SpacingCssProps, spacingCss } from '../Containers';
import { LinkProps } from './Link';

export const StyledLink = styled.button.attrs<SpacingCssProps>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.s,
	mtValue: mtValue || theme.spacing.s,
	mrValue: mrValue || theme.spacing.s,
	mlValue: mlValue || theme.spacing.s,
}))<LinkProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${({ theme }) => theme.transition};

	gap: ${({ size }) => (size === 'standard' ? '8px' : '0px')};

	color: ${({ theme, color }) => (color ? theme.color?.[color] : theme.color.black_secondary)};

	font-size: 14px;
	line-height: 14px;

	&:hover {
		opacity: 0.7;
	}

	${spacingCss}
`;
