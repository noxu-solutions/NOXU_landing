import styled, { css } from 'styled-components';
import { SpacingCssProps, spacingCss } from '../Containers';
import { ButtonProps } from './Button';

export const StyledButton = styled.button.attrs<SpacingCssProps>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.s,
	mtValue: mtValue || theme.spacing.s,
	mrValue: mrValue || theme.spacing.s,
	mlValue: mlValue || theme.spacing.s,
}))<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: ${({ theme }) => theme.transition};

	height: ${({ size }) => (size === 'standard' ? '52px' : '38px')};
	padding: ${({ size }) => (size === 'standard' ? '16px 24px' : '12px 20px')};
	gap: ${({ size }) => (size === 'standard' ? '6px' : '0px')};
	border-radius: ${({ size }) => (size === 'standard' ? '94px' : '57px')};

	background-color: ${({ theme }) => theme.color.red};

	color: ${({ theme, color }) => (color ? theme.color?.[color] : theme.color.white)};
	font-size: ${({ size }) => (size === 'standard' ? '16px' : '14px')};
	line-height: ${({ size }) => (size === 'standard' ? '16px' : '14px')};

	&:hover {
		background-color: ${({ theme }) => theme.color.black_secondary};
	}

	${spacingCss}
`;
