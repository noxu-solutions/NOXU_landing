import GoogleAnalytics from 'components/GoogleAnalytics';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta name='viewport' content='width=device-width , initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link href='https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap' rel='stylesheet' />
			</Head>
			<body>
				<Main />
				<NextScript>
					<GoogleAnalytics />
				</NextScript>
			</body>
		</Html>
	);
};

export default Document;
