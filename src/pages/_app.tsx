import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../themes';
import useBootstrap from '../hooks/useBootstrap';
import Sprite from 'components/Sprite/Sprite';
import Preloader from 'components/Preloader/Preloader';

const MyApp = ({ Component, pageProps }: AppProps) => {
	useBootstrap();
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<Sprite />
				<GlobalStyle />
				<Preloader isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
