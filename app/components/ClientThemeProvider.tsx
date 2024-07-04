'use client';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/defaultTheme';
import { GlobalStyle } from '../styles/global';
import Sprite from './Sprite/Sprite';

export default function ClientThemeProvider({ children }: any) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Sprite />
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
}
