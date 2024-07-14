import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../themes';
import useBootstrap from '../hooks/useBootstrap';
import Sprite from 'components/Sprite/Sprite';
import Preloader from 'components/Preloader/Preloader';
import Head from 'next/head';
import Favicon from '/public/favicon.ico';

const MyApp = ({ Component, pageProps }: AppProps) => {
	useBootstrap();
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			<Head>
				<link rel='icon' href={Favicon.src} sizes='any' />
				<title>NOXU Solutions | Custom Software Development Company</title>
				<meta name='title' content='Custom Software Development Company | NOXU Solutions' />
				<meta
					name='description'
					content='At NOXU Solutions, we specialize in full-cycle custom software development. From ideation to launch, our expert team provides tailored solutions in product development, UX/UI design, and branding to elevate your business. Partner with us to transform your ideas into exceptional digital products and ensure your success in the competitive tech landscape..'
				/>
			</Head>
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
