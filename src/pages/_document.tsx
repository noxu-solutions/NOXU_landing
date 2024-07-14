import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta name='viewport' content='width=device-width , initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' />
				<meta name='title' content='Custom Software Development Company | NOXU Solutions' />
				<meta
					name='description'
					content='At NOXU Solutions, we specialize in full-cycle custom software development. From ideation to launch, our expert team provides tailored solutions in product development, UX/UI design, and branding to elevate your business. Partner with us to transform your ideas into exceptional digital products and ensure your success in the competitive tech landscape..'
				/>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link href='https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap' rel='stylesheet' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
