import styled from 'styled-components';

export const Pill = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;

	color: ${({ theme }) => theme.color.red};
	border: 1px solid ${({ theme }) => theme.color.light_red};
	background-color: ${({ theme }) => theme.color.light_red_2};

	padding: 8px 16px;
	border-radius: 100px;

	font-size: 16px;
	font-weight: 400;
	line-height: 24px;

	margin-bottom: 8px;
`;
