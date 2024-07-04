'use client';
import styled from 'styled-components';
import { Col } from '../Containers';
import { Paragraph } from '../Typography';

export const InputWrapper = styled(Col)`
	flex: 1;
	align-self: stretch;
`;

export const StyledInput = styled.input<{
	focused: boolean;
	disabled?: boolean;
}>`
	font-size: ${({ theme }) => theme.fontSize.s};
	padding: 12px 24px;
	height: 48px;
	color: ${({ theme }) => theme.color.grey_light_3};
	background-color: ${({ theme }) => theme.color.white};
	border-radius: 40px;
	transition: ${({ theme }) => theme.transition};
	border: 1px solid ${({ theme, focused }) => (focused ? theme.color.grey_light_3 : theme.color.grey_light_2)};
`;

export const InputRightButton = styled.button`
	display: flex;
	align-items: center;
	margin-right: ${({ theme }) => theme.spacing.m};
`;

export const InputErrorMessage = styled(Paragraph)`
	color: ${({ theme }) => theme.color.redDark};
	font-size: ${({ theme }) => theme.fontSize.xs};
`;
