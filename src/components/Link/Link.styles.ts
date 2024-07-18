import styled from 'styled-components';
import { SpacingCssProps, spacingCss } from '../Containers';
import { LinkProps } from './Link';
import { css } from 'styled-components';

export const StyledLink = styled.a.attrs<SpacingCssProps & { variant: 'link' | 'button' }>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.s,
	mtValue: mtValue || theme.spacing.s,
	mrValue: mrValue || theme.spacing.s,
	mlValue: mlValue || theme.spacing.s,
}))<LinkProps>`
	${({ variant, size, color, theme }) =>
		variant === 'link' &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			transition: ${({ theme }) => theme.transition};

			gap: ${size === 'standard' ? '8px' : '0px'};

			color: ${color ? theme.color?.[color] : theme.color.black_secondary};

			font-size: ${size === 'standard' ? '16px' : '14px'};
			line-height: ${size === 'standard' ? '16px' : '14px'};

			&:hover {
				opacity: 0.7;
			}
		`}

	${({ variant, size, color, theme }) =>
		variant === 'button' &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			transition: ${({ theme }) => theme.transition};

			height: ${size === 'standard' ? '52px' : '38px'};
			padding: ${size === 'standard' ? '16px 24px' : '12px 20px'};
			gap: ${size === 'standard' ? '6px' : '0px'};
			border-radius: ${size === 'standard' ? '94px' : '57px'};

			background-color: ${({ theme }) => theme.color.red};

			color: ${color ? theme.color?.[color] : theme.color.white};
			font-size: ${size === 'standard' ? '16px' : '14px'};
			line-height: ${size === 'standard' ? '16px' : '14px'};

			&:hover {
				background-color: ${({ theme }) => theme.color.black_secondary};
			}
		`}

	${spacingCss}
`;
