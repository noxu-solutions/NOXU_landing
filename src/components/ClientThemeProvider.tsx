import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import Sprite from './Sprite/Sprite';
import { defaultTheme } from 'themes';

export default function ClientThemeProvider({ children }: any) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Sprite />
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
}
