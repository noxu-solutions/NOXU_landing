import type { Metadata } from 'next';
import Favicon from '/public/favicon.ico';
import ClientThemeProvider from './components/ClientThemeProvider';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata: Metadata = {
	title: 'Custom Software Development Company | NOXU Solutions',
	description:
		'At NOXU Solutions, we specialize in full-cycle custom software development. From ideation to launch, our expert team provides tailored solutions in product development, UX/UI design, and branding to elevate your business. Partner with us to transform your ideas into exceptional digital products and ensure your success in the competitive tech landscape.',
	viewport: 'width=device-width , initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no',
	icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<GoogleAnalytics />
			<body>
				<ClientThemeProvider>{children}</ClientThemeProvider>
			</body>
		</html>
	);
}
