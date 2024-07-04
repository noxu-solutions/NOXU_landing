'use client';
import styled, { css } from 'styled-components';
import { Paragraph } from '../Typography';

export const Label = styled(Paragraph)`
	margin-left: 8px;
`;

export const CheckboxWrapper = styled.label`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const CheckboxInnerWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	height: 16px;
	width: 16px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	height: 100%;
	left: 0;
	margin: 0;
	opacity: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>(
	({ theme, checked }) => css`
		display: inline-block;
		width: 16px;
		height: 16px;
		background: ${checked ? theme.color.red : 'transparent'};
		box-shadow: 0 0 0 1px ${theme.color.red} inset;
		border-radius: 3px;
		transition: all 150ms;

		svg {
			fill: ${theme.color.white};
		}

		${HiddenCheckbox}:focus + & {
			box-shadow: 0 0 0 3px ${theme.color.red} inset;
		}

		${HiddenCheckbox}:disabled + & {
			opacity: 0.5;
		}
	`,
);
