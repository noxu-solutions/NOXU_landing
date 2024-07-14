import styled, { css } from 'styled-components';

export const InputFileWrap = styled.div(
	({ theme }) => css`
		position: relative;
		width: 100%;

		.upload-label {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 20px;
			background: ${theme.color.transparent};
			color: ${theme.color.dark};
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			border: 1px dashed ${theme.color.greyLight_1};
			border-radius: 8px;
			margin-bottom: 20px;
			position: relative;
			z-index: 1;
			transition: ${theme.transition};
			cursor: pointer;

			@media (min-width: ${theme.breakpoint.largeMin}px) {
				&:hover {
					background: ${theme.color.greyLight_3};
				}
			}

			svg {
				width: 24px;
				height: 24px;
				margin: -3px 6px 0 0;
			}
		}

		.input {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			opacity: 0;
			padding: 14px 0;
			cursor: pointer;
		}
	`,
);

export const FileReturnWrap = styled.div<{
	error: boolean;
}>(
	({ theme, error }) => css`
		.wrap {
			position: relative;
			min-height: 24px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 8px;
			color: ${error && theme.color.red};
		}

		p {
			margin-right: auto;
			text-indent: 6px;
			font-size: 14px;
			line-height: 21px;
			font-weight: 500;
		}

		.icon {
			width: 24px;
			height: 24px;
			cursor: pointer;

			&:hover {
				opacity: 0.8;
			}
		}

		.row {
			margin-top: 0;
		}

		.pdf {
			width: 24px;
			height: 24px;
			min-width: 24px;
			min-height: 24px;
			margin-left: -3px;
			fill: ${error && theme.color.red};
		}

		.error {
			font-weight: 500;
			font-size: 12px;
			line-height: 18px;
			color: ${theme.color.red};
			margin: -5px 0 10px;
			display: block;
		}
	`,
);
