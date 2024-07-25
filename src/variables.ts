export const testimonialsSettings = {
	dots: true,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

export const expertiseSettings = {
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 824,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				dots: true,
				slidesToShow: 1,
			},
		},
	],
};

export const AWARDS = [
	{
		id: 1,
		text: 'Members of European Association of Software Engineering',
		img: './img/award-icon1.png',
	},
	{
		id: 2,
		text: '5 Star Rating on Clutch',
		img: './img/award-icon2.png',
	},
	{
		id: 3,
		text: 'Top Software Development Company 2021 Dnipro',
		img: './img/award-icon3.png',
	},
	{
		id: 4,
		text: 'UpWork Rising Talent',
		img: './img/award-icon4.png',
	},
];

export const TESTIMONIALS = [
	{
		id: 1,
		text: 'NOXU Solutions demonstrated good skills in professional work environments and collected the best information base. The team established operational and productive communication. They provided flexible terms of cooperation and their ability to launch a project on short notice was impressive.',
		text_2: 'Oleg Mogytych',
		text_3: 'CTO at Neetly',
		text_4: 'Stavanger, Norway',
		img: './img/testimonial-1.png',
	},
	{
		id: 2,
		text: 'The board was happy with the platform, which met their expectations and was easy to edit and change. NOXU Solutions had a great communication process, managing the project seamlessly and with great care. Their services were also highly cost-effective. Overall, the engagement was highly successful.',
		text_2: 'Michael Muyingo',
		text_3: 'Startup Founder',
		text_4: 'California, USA',
		img: './img/testimonial-2.png',
	},
	{
		id: 3,
		text: `In just three months after launching the SaaS solution built by NOXU Solutions, the client gained 300 registered users in the test market. The app was robust, and users haven't encountered any bugs or issues. The team had extensive expertise in AWS that allowed them to recommend improvements.`,
		text_2: 'NDA',
		text_3: 'Chief Digital Officer',
		text_4: 'Kyiv, Ukraine',
		img: './img/testimonial-3.png',
	},
	{
		id: 4,
		text: 'Even during the hard times in Ukraine, NOXU committed - NOXU delivered. It was and still is a pleasure to work on the multiple initiatives that we have launched together. Separate kudos for always managing to find necessary people with specific knowledge quickly.',
		text_2: 'Eugene Kozloff',
		text_3: 'CEO at KofiTech',
		text_4: 'Warsaw, Poland',
		img: './img/testimonial-4.png',
	},
];

export const SERVICES = [
	{
		id: 1,
		title: 'Product Development',
		text: 'Get your vision off the ground efficiently and effectively. Our seasoned team of engineers, designers, analysts, and project managers collaborate together to bring your project from 0 to 1. Leave all the technical stuff for us to handle.',
		img: './img/service-icon1.svg',
		info: ['End-to-End Approach', 'Scalability First', 'Best Value/Cost Ratio', 'Optimal time zone'],
		border: 'light_red',
		color: 'light_red_2',
		checkmarkIco: 'checkmark-red',
	},
	{
		id: 2,
		title: 'Team Extension',
		text: `Boost your productivity by effortlessly integrating our skilled professionals into your team. Access top-tier talent to accelerate development, enhance code organization, elevate product's quality.`,
		img: './img/service-icon2.svg',
		info: ['Prompt Hiring', 'Cost-Effective', 'Flexible Scaling', 'Hire Anyone'],
		border: 'light_green',
		color: 'light_green_2',
		checkmarkIco: 'checkmark-green',
	},
	{
		id: 3,
		title: 'PoC Development',
		text: 'Looking to validate your product idea quickly? The PoC & Discovery process helps to confirm "doability" of the concept, identify risks early on, and provide something feasible to your stakeholders fast —all while saving you time and costs.',
		img: './img/service-icon3.svg',
		info: ['Competitors Research', 'Full-scale MVP app', 'UX Prototype', 'Definitive Estimate'],
		border: 'light_blue',
		color: 'light_blue_2',
		checkmarkIco: 'checkmark-blue',
	},
	{
		id: 4,
		title: 'Design & Branding',
		text: 'Elevate your brand with our expert UX/UI design and branding services. From stunning logos to cohesive visual identities, we ensure your brand stands out. Our specialists create user-friendly designs that enhance customer experiences and drive engagement.',
		img: './img/service-icon4.svg',
		info: ['Brand strategy', 'Visual identity', 'Market analysis ', 'UX | UI'],
		border: 'light_purple',
		color: 'light_purple_2',
		checkmarkIco: 'checkmark-purple',
	},
];

export const WORKS = [
	{
		id: 1,
		title: 'LumFlow',
		text: 'In this project we started with PoC & Discovery which soon became an MVP Development for Project Management startup LumFlow. The main goal of an MVP was to develop and polish 3 core features: Project Register, Agile Frameworks and Team Management.',
		img: './animations/LumFlow_Case_Animation.riv',
		info: ['./img/react.svg', './img/node.svg', './img/aws.svg', './img/mongo.svg'],
		country: 'USA',
		flag: './img/USA.svg',
		industry: 'SaaS',
		service: 'Branding + PoC + MVP Development',
		team: 'Brand Designer, UX/UI Designer, Business Analyst, Project Manager, 2 Software Engineers, QA Engineer',
		timeline: '5 months',
		color: 'purple',
	},
	{
		id: 2,
		title: 'CRM for Moving Company',
		text: `CRM system for the internal needs of a moving company based in New Jersey, USA. Our custom solution according to our client’s requirements combines 3 core features from different platforms which are: managing requests, logistics and workload. `,
		img: './animations/MagicMove.riv',
		info: ['./img/react.svg', './img/node.svg', './img/aws.svg', './img/java.svg'],
		country: 'USA',
		flag: './img/USA.svg',
		industry: 'Logistics',
		service: 'Product Development',
		team: 'Project Manager, Application Architect, 3 Software Engineers, QA Engineer',
		timeline: '10 months',
		color: 'green',
	},
	{
		id: 3,
		title: 'KoFi Start',
		text: 'This platform was completely developed from scratch allowing its business owners to offer seamless purchase and sale of cryptocurrencies for individual and institutional clients across the EU. It includes transaction processing and support for multiple cryptocurrencies.',
		img: './animations/KoFi.riv',
		info: ['./img/react.svg', './img/node.svg', './img/aws.svg', './img/mongo.svg'],
		country: 'Poland',
		flag: './img/PL.svg',
		industry: 'FinTech',
		service: 'Product Development',
		team: 'Project Manager, Application Architect, 4 Software Engineers, QA Engineer',
		timeline: 'October 2021 - Ongoing',
		color: 'blue',
	},
];

export const ENTERPRISE_AWARDS = [
	{
		id: 1,
		text: 'Projects completed',
		title: '+',
		count: 34,
	},
	{
		id: 2,
		text: 'Associates worldwide',
		title: '',
		count: 14,
	},
	{
		id: 3,
		text: 'Years of experience',
		title: '+',
		count: 10,
	},
	{
		id: 4,
		text: 'Customer Retention',
		title: '%',
		count: 87,
	},
];

export const ENTERPRISE_EXPERTS = [
	{
		id: 1,
		title: 'Nikita Rykov',
		text: 'Founder & CEO',
		text_2: 'Former Delivery Manager. Dedicated to fostering innovation and client success.',
		img: './img/Team card-5.jpg',
	},
	{
		id: 2,
		title: 'Alex Ostapiuk',
		text: 'Chief Solutions Architect',
		text_2: 'Architecting robust solutions with over a decade of industry experience.',
		img: 'img/Team card-1.png',
	},
	{
		id: 3,
		title: 'Artem Onufriichuk',
		text: 'Senior Delivery Lead',
		text_2: 'Expert in delivering complex projects on time and within budget. Front-End Tech Lead.',
		img: '/img/Team card-4.png',
	},
	{
		id: 4,
		title: 'Andrew Statsenko',
		text: 'CTO & Client Success Lead',
		text_2: 'Driving technical excellence and ensuring client success with innovative strategies.',
		img: '/img/Team card-3.png',
	},
	{
		id: 5,
		title: 'Artem Kizenko',
		text: 'Client Success Lead (Benelux)',
		text_2: 'Strengthening client relationships with strategic insights and exceptional service.',
		img: '/img/Team card-2.png',
	},
	// {
	// 	id: 6,
	// 	title: 'Anastasiia Piskun',
	// 	text: 'Creative Design Lead',
	// 	text_2: 'Transforming ideas into stunning designs that drive user engagement.',
	// 	img: '/img/LumFlow.jpg',
	// },
];

export const VALUES = [
	{
		id: 1,
		title: 'Partnership',
		text: 'We believe in fostering strong relationships built on trust, collaboration, and mutual success.',
		img: './img/value-icon1.svg',
	},
	{
		id: 2,
		title: 'Accountability',
		text: 'We take ownership of our actions and commitments, delivering results with integrity and reliability.',
		img: './img/value-icon2.svg',
	},
	{
		id: 3,
		title: 'Transparency',
		text: 'We uphold open and honest communication, ensuring clarity and trust in all our interactions.',
		img: './img/value-icon3.svg',
	},
	{
		id: 4,
		title: 'Efficiency',
		text: 'We strive for effectiveness and productivity, optimizing processes to deliver high-quality solutions promptly.',
		img: './img/value-icon4.svg',
	},
];

export const LOCATIONS = [
	{
		id: 1,
		title: 'USA, San Mateo',
		text: '1600 E 3rd Ave, 94401',
		text_2: 'Phone: +1 650 270 4188',
		img: './img/location-usa.svg',
		flag: './img/USA.svg',
	},
	{
		id: 2,
		title: 'Belgium, Brussels',
		text: 'Rue du Luxembourg 35, 1050',
		text_2: 'Phone: +324 732 09 725',
		img: './img/location-bg.svg',
		flag: './img/Belgium.svg',
	},
	{
		id: 3,
		title: 'Ukraine, Uzhgorod',
		text: '12, Ferenc Rakoczi str. 88000',
		text_2: 'Phone: +380 95 328 2617',
		img: './img/location-ua.svg',
		flag: './img/Ukraine.svg',
	},
];
