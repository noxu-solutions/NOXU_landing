import styled, { css, CSSProperties, DefaultThemeColorKey } from 'styled-components';
import { spacingCss, SpacingCssProps } from './Containers';

export interface ParagraphProps extends Pick<CSSProperties, 'textAlign' | 'whiteSpace' | 'maxWidth'> {
	variant?: 'medium' | 'bold';
	color?: DefaultThemeColorKey;
}

export const Paragraph = styled.p.attrs<SpacingCssProps>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.m,
	mtValue: mtValue || theme.spacing.m,
	mrValue: mrValue || theme.spacing.m,
	mlValue: mlValue || theme.spacing.m,
}))<ParagraphProps & SpacingCssProps>(
	({ variant = 'medium', color = 'black', theme, textAlign = 'left', whiteSpace, maxWidth = '100%' }) => css`
		max-width: ${maxWidth};
		text-align: ${textAlign};
		white-space: ${whiteSpace};
		color: ${theme.color[color]};
		font-size: 14px;
		line-height: 20px;
		font-family: 'Golos Text', sans-serif;
		font-optical-sizing: auto;
		font-style: normal;

		@media (min-width: 1025px) and (min-height: 568px) {
			font-size: 16px;
			line-height: 24px;
		}

		${variant === 'medium' &&
		css`
			font-weight: 400;
		`}

		${variant === 'bold' &&
		css`
			font-weight: 600;
		`}

    ${spacingCss}
	`,
);

export interface SubtitleProps extends Pick<CSSProperties, 'textAlign' | 'maxWidth'> {
	variant?: 'medium' | 'bold';
	color?: DefaultThemeColorKey;
}

export const Subtitle = styled.p.attrs<SpacingCssProps>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.s,
	mtValue: mtValue || theme.spacing.s,
	mrValue: mrValue || theme.spacing.s,
	mlValue: mlValue || theme.spacing.s,
}))<SubtitleProps & SpacingCssProps>(
	({ theme, variant = 'medium', color = 'black', textAlign = 'left', maxWidth = '100%' }) => css`
		max-width: ${maxWidth};
		color: ${theme.color[color]};
		text-align: ${textAlign};
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		font-family: 'Golos Text', sans-serif;
		font-optical-sizing: auto;
		font-style: normal;

		@media (min-width: 1025px) and (min-height: 568px) {
			font-size: 20px;
			line-height: 32px;
		}

		${variant === 'bold' &&
		css`
			font-weight: 600;
		`}

		${spacingCss}
	`,
);

export interface TitleProps extends Pick<CSSProperties, 'textAlign' | 'maxWidth'> {
	variant?: 'h0' | 'h1' | 'h2' | 'h3' | 'h4';
	color?: DefaultThemeColorKey;
}

export const Title = styled.p.attrs<SpacingCssProps>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.s,
	mtValue: mtValue || theme.spacing.s,
	mrValue: mrValue || theme.spacing.s,
	mlValue: mlValue || theme.spacing.s,
}))<TitleProps & SpacingCssProps>(
	({ theme, variant = 'h1', color = 'black', textAlign = 'left', maxWidth = '100%' }) => css`
		max-width: ${maxWidth};
		color: ${theme.color[color]};
		text-align: ${textAlign};
		font-weight: 600;
		font-family: 'Golos Text', sans-serif;
		font-optical-sizing: auto;
		font-style: normal;

		${variant === 'h0' &&
		css`
			font-size: 44px;
			line-height: 44px;
			letter-spacing: -0.02em;

			@media (min-width: 1025px) and (min-height: 568px) {
				font-size: 72px;
				line-height: 72px;
			}
		`}

		${variant === 'h1' &&
		css`
			font-size: 40px;
			line-height: 48px;

			@media (min-width: 1025px) and (min-height: 568px) {
				font-size: 52px;
				line-height: 62.4px;
			}
		`}

		${variant === 'h2' &&
		css`
			font-size: 28px;
			line-height: 33.6px;

			@media (min-width: 1025px) and (min-height: 568px) {
				font-size: 40px;
				line-height: 48px;
			}
		`}

    ${variant === 'h3' &&
		css`
			font-size: 26px;
			line-height: 31.2px;
		`}

    ${variant === 'h4' &&
		css`
			font-size: 22px;
			line-height: 26px;
		`}



    span {
			color: ${theme.color.red};
		}

		${spacingCss}
	`,
);
