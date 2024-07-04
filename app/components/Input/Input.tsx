'use client';
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useState } from 'react';
import { StyledInput, InputErrorMessage, InputWrapper } from './Input.styles';
import { Paragraph } from '../Typography';
import { useTheme } from 'styled-components';
import { Col } from '../Containers';

interface OwnProps
	extends Pick<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'value' | 'onChange' | 'placeholder' | 'type' | 'id' | 'autoFocus' | 'disabled' | 'required' | 'name'
	> {
	label?: string;
	error?: any;
}

const Input: FC<OwnProps> = ({ value, onChange, placeholder, type, id, autoFocus, error, label, disabled, required, name }) => {
	const theme = useTheme();
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Col flex={1}>
			<InputWrapper gap='6px'>
				{label && <Paragraph variant='bold'>{label}</Paragraph>}
				<StyledInput
					value={value}
					id={id}
					name={name}
					type={type}
					placeholder={placeholder}
					autoFocus={autoFocus}
					onChange={onChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					disabled={disabled}
					focused={isFocused}
					required={required}
				/>
			</InputWrapper>

			{error && <InputErrorMessage style={{ marginTop: theme.spacing.xs }}>{error}</InputErrorMessage>}
		</Col>
	);
};

export default Input;
