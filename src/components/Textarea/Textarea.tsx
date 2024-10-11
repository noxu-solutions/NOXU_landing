import { DetailedHTMLProps, FC, ReactNode, TextareaHTMLAttributes, useState } from 'react';
import { StyledTextarea, InputErrorMessage, InputWrapper } from './Textarea.styles';
import { Paragraph } from '../Typography';
import { useTheme } from 'styled-components';
import { Col } from '../Containers';

interface OwnProps
	extends Pick<
		DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
		'value' | 'onChange' | 'placeholder' | 'id' | 'autoFocus' | 'disabled' | 'required' | 'name'
	> {
	label?: string;
	error?: any;
}

const Textarea: FC<OwnProps> = ({ value, onChange, placeholder, id, autoFocus, error, label, disabled, required, name }) => {
	const theme = useTheme();
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Col flex={1}>
			<InputWrapper gap='6px'>
				{label && <Paragraph variant='bold'>{label}</Paragraph>}
				<StyledTextarea
					value={value}
					id={id}
					name={name}
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

export default Textarea;
