/* eslint-disable @next/next/no-img-element */
'use client';

import { Col, Row } from './components/Containers';
import Icon from './components/Icon/Icon';

import { Footer, FooterContainer, FooterLinks, FooterLinksWrapper, FooterLogo, FooterNav, FooterSocialLinks } from './components/Footer';
import { Header, HeaderContainer, HeaderLogo, HeaderNav } from './components/Header';
import { Hero, HeroAward, HeroAwards, HeroBigImg, HeroContainer, HeroImg, HeroInfo, HeroTexts } from './components/Hero';
import {
	Expertise,
	ExpertiseAward,
	ExpertiseAwards,
	ExpertiseContainer,
	ExpertiseExpert,
	ExpertiseExpertImg,
	ExpertiseExpertText,
	ExpertiseExperts,
} from './components/Expertise';
import { Location, LocationContainer, LocationFlagImg, LocationImg, LocationItems, Locations } from './components/Locations';
import { Service, ServiceImg, ServiceInfoItem, ServiceInfoItems, ServiceItems, ServiceTexts, Services, ServicesContainer } from './components/Services';
import {
	Testimonial,
	TestimonialImg,
	TestimonialItems,
	TestimonialPersonImg,
	TestimonialTexts,
	Testimonials,
	TestimonialsContainer,
} from './components/Testimonials';
import { Value, ValueImg, ValueItems, Values, ValuesContainer } from './components/Values';
import { CTA, CTAContainer, CTAForm, CTAFormWrapper, CTAImg, CTAInfo, CTAInfoItem, CTAInputs, CTAListItem, CTANameInputs } from './components/CTA';
import { Work, WorkFlagImg, WorkImg, WorkItems, WorkSpecs, WorkSpecsRow, WorkStack, WorkStackImg, WorkTexts, Works, WorksContainer } from './components/Works';
import { Paragraph, Subtitle, Title } from './components/Typography';
import Button from './components/Button/Button';
import Link from './components/Link/Link';
import Input from './components/Input/Input';
import { Pill } from './components/Pill/Pill.styles';
import StaleInputFile from './components/StaleInputFile/StaleInputFile';
import { useRef, useState } from 'react';
import Checkbox from './components/Checkbox/Checkbox';

import Slider from 'react-slick';
import { ArrowsContainer, StaleCarouselWrapper } from './styles/StaleCarousel.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderArrow from './components/SliderArrow/SliderArrow';

const AWARDS = [
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

const TESTIMONIALS = [
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

const SERVICES = [
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

const WORKS = [
	{
		id: 1,
		title: 'LumFlow',
		text: 'In this project we started with PoC & Discovery which soon became an MVP Development for Project Management startup LumFlow. The main goal of an MVP was to develop and polish 3 core features: Project Register, Agile Frameworks and Team Management.',
		img: './img/LumFlow.jpg',
		info: ['./img/react.svg', './img/node.svg', './img/aws.svg', './img/mongo.svg'],
		country: 'USA',
		flag: './img/USA.svg',
		industry: 'SaaS',
		service: 'Branding + PoC + MVP Development',
		team: 'Brand Designer, UX/UI Designer, Business Analyst, Project Manager, 2 Software Engineers, QA Engineer',
		timeline: '5 months',
	},
	{
		id: 2,
		title: 'CRM for Moving Company',
		text: `CRM system for the internal needs of a moving company based in New Jersey, USA. Our custom solution according to our client’s requirements combines 3 core features from different platforms which are: managing requests, logistics and workload. `,
		img: './img/CRM for Moving Company.jpg',
		info: ['./img/react.svg', './img/node.svg', './img/aws.svg', './img/java.svg'],
		country: 'USA',
		flag: './img/USA.svg',
		industry: 'Logistics',
		service: 'Product Development',
		team: 'Project Manager, Application Architect, 3 Software Engineers, QA Engineer',
		timeline: '10 months',
	},
	{
		id: 3,
		title: 'KoFi Start',
		text: 'This platform was completely developed from scratch allowing its business owners to offer seamless purchase and sale of cryptocurrencies for individual and institutional clients across the EU. It includes transaction processing and support for multiple cryptocurrencies.',
		img: './img/KoFi Start.jpg',
		info: ['./img/react.svg', './img/node.svg', './img/aws.svg', './img/mongo.svg'],
		country: 'Poland',
		flag: './img/PL.svg',
		industry: 'FinTech',
		service: 'Product Development',
		team: 'Project Manager, Application Architect, 4 Software Engineers, QA Engineer',
		timeline: 'October 2021 - Ongoing',
	},
];

const ENTERPRISE_AWARDS = [
	{
		id: 1,
		text: 'Projects completed',
		title: '34+',
	},
	{
		id: 2,
		text: 'Associates worldwide',
		title: '14',
	},
	{
		id: 3,
		text: 'Years of experience',
		title: '10+',
	},
	{
		id: 4,
		text: 'Customer Retention',
		title: '87%',
	},
];

const ENTERPRISE_EXPERTS = [
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

const VALUES = [
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

const LOCATIONS = [
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

const Page = () => {
	const [file, setFile] = useState<any>();
	const [isLoading, setIsLoading] = useState(false);
	const [checkboxValue, setCheckboxValue] = useState(false);
	const testimonialsSlider = useRef(null);
	const expertiseSlider = useRef(null);

	const testimonialsSettings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
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

	const expertiseSettings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
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

	return (
		<>
			<Header as='header'>
				<HeaderContainer>
					<Row>
						<HeaderLogo src='./img/logo.svg' alt='NOXU Solutions' />
					</Row>
					<Row>
						<HeaderNav as='nav'>
							<ul>
								<li>
									<Link href='/#testimonials'>Testimonials</Link>
								</li>
								<li>
									<Link href='/#services'>Services</Link>
								</li>
								<li>
									<Link href='/#cases-studies'>Cases Studies</Link>
								</li>
								<li>
									<Link href='/#our-team'>Our team</Link>
								</li>
							</ul>
						</HeaderNav>
						<Button size='small' withIcon>
							Contact Us
						</Button>
					</Row>
				</HeaderContainer>
			</Header>

			<Hero>
				<HeroContainer as='section'>
					<HeroTexts>
						<HeroInfo>
							<Title>
								We turn ideas into <span>top-notch software</span> that people love
							</Title>
							<Subtitle maxWidth='500px'>
								Full-cycle custom software development company. Focus on your business - our dedicated teams will do the rest.
							</Subtitle>
							<Row>
								<Button withIcon mt mtValue='32px'>
									Schedule a call
								</Button>
							</Row>
						</HeroInfo>
						<HeroBigImg src='./img/hero-image.png' alt='Hero Image' />
					</HeroTexts>
				</HeroContainer>

				<HeroContainer as='section'>
					<HeroAwards>
						{AWARDS.map((item) => (
							<HeroAward key={item.id}>
								<HeroImg src={item.img} alt={item.text} />
								<Paragraph variant='bold' textAlign='center' maxWidth={item.id === 2 || item.id === 4 ? '120px' : '220px'}>
									{item.text}
								</Paragraph>

								{item.id === 2 && (
									<Link
										size='small'
										withIcon
										target='_blank'
										rel='nofollow'
										href='https://clutch.co/profile/noxu-solutions?_gl=1*1x48a5p*_gcl_au*MjA2NTYyOTg5NC4xNzE1MjQyNTAy*FPAU*MjA2NTYyOTg5NC4xNzE1MjQyNTAy*_ga*MTk5NDQxMDM2Ni4xNzE1MjQyNTAy*_ga_D0WFGX8X3V*MTcyMDI2Nzc4OS41LjEuMTcyMDI2Nzc5Ny41Mi4wLjIwMzkyNzI0MjU.#highlights'>
										Leave a review
									</Link>
								)}
							</HeroAward>
						))}
					</HeroAwards>
				</HeroContainer>
			</Hero>

			<Testimonials as='section' id='testimonials'>
				<TestimonialsContainer>
					<Row>
						<Col>
							<Pill>Testimonials</Pill>
							<Title variant='h2'>From Concept to Completion</Title>
						</Col>

						<ArrowsContainer>
							{/* @ts-ignore */}
							<SliderArrow variant='prev' onClick={() => testimonialsSlider?.current?.slickPrev()} />
							{/* @ts-ignore */}
							<SliderArrow variant='next' onClick={() => testimonialsSlider?.current?.slickNext()} />
						</ArrowsContainer>
					</Row>
					<TestimonialItems>
						<StaleCarouselWrapper>
							<Slider ref={testimonialsSlider} {...testimonialsSettings}>
								{TESTIMONIALS.map((item) => (
									<Testimonial key={item.id}>
										<TestimonialImg src='./img/testimonial-image.svg' alt='Testimonial Image' />
										<Paragraph>{item.text}</Paragraph>

										<TestimonialTexts>
											<TestimonialPersonImg src={item.img} alt={item.text_2} />
											<Col>
												<Title variant='h4' mb mbValue='6px'>
													{item.text_2}
												</Title>
												<Paragraph variant='bold'>{item.text_3}</Paragraph>
												<Paragraph>{item.text_4}</Paragraph>
											</Col>
										</TestimonialTexts>
									</Testimonial>
								))}
							</Slider>
						</StaleCarouselWrapper>
					</TestimonialItems>
				</TestimonialsContainer>
			</Testimonials>

			<Services as='section' id='services'>
				<ServicesContainer>
					<Title variant='h2'>Explore our services</Title>
					<ServiceItems>
						{SERVICES.map((item) => (
							<Service key={item.id} color={item.color} border={item.border}>
								<Row>
									<ServiceImg src={item.img} alt={item.title} />
									<Link size='small' withIcon>
										Send request
									</Link>
								</Row>

								<ServiceTexts>
									<Title variant='h3'>{item.title}</Title>
									<Paragraph>{item.text}</Paragraph>
								</ServiceTexts>

								<ServiceInfoItems>
									{item.info.map((infoItem) => (
										<ServiceInfoItem key={infoItem}>
											<Icon icon={item.checkmarkIco} width='16px' />
											{infoItem}
										</ServiceInfoItem>
									))}
								</ServiceInfoItems>
							</Service>
						))}
					</ServiceItems>
				</ServicesContainer>
			</Services>

			<Works as='section' id='cases-studies'>
				<WorksContainer>
					<Pill>Case studies</Pill>
					<Title variant='h2' textAlign='center' maxWidth='630px'>
						Discover our works from <span>concept to completion</span>
					</Title>
					<WorkItems>
						{WORKS.map((item) => (
							<Work key={item.id}>
								<WorkImg src={item.img} alt={item.title} />

								<WorkTexts>
									<Title variant='h2'>{item.title}</Title>
									<Paragraph>{item.text}</Paragraph>

									<WorkSpecs>
										<WorkSpecsRow>
											<Paragraph variant='bold'>Country:</Paragraph>

											<Row>
												<WorkFlagImg src={item.flag} alt={item.country} />
												<Paragraph>{item.country}</Paragraph>
											</Row>
										</WorkSpecsRow>
										<WorkSpecsRow>
											<Paragraph variant='bold'>Industry:</Paragraph> <Paragraph>{item.industry}</Paragraph>
										</WorkSpecsRow>
										<WorkSpecsRow>
											<Paragraph variant='bold'>Service:</Paragraph> <Paragraph>{item.service}</Paragraph>
										</WorkSpecsRow>
										<WorkSpecsRow>
											<Paragraph variant='bold'>Team:</Paragraph> <Paragraph>{item.team}</Paragraph>
										</WorkSpecsRow>
										<WorkSpecsRow>
											<Paragraph variant='bold'>Timeline:</Paragraph> <Paragraph>{item.timeline}</Paragraph>
										</WorkSpecsRow>
									</WorkSpecs>

									<WorkStack>
										{item.info.map((src) => (
											<WorkStackImg key={src} src={src} alt={src.split('/')?.[2]} />
										))}
									</WorkStack>
								</WorkTexts>
							</Work>
						))}
					</WorkItems>
				</WorksContainer>
			</Works>

			<Expertise id='our-team'>
				<ExpertiseContainer>
					<Row>
						<Col>
							<Pill>Our team</Pill>
							<Title variant='h2'>Specialist Expertise</Title>
						</Col>

						<ArrowsContainer>
							{/* @ts-ignore */}
							<SliderArrow variant='prev' onClick={() => expertiseSlider?.current?.slickPrev()} />
							{/* @ts-ignore */}
							<SliderArrow variant='next' onClick={() => expertiseSlider?.current?.slickNext()} />
						</ArrowsContainer>
					</Row>

					<ExpertiseExperts as='section'>
						<StaleCarouselWrapper>
							<Slider ref={expertiseSlider} {...expertiseSettings}>
								{ENTERPRISE_EXPERTS.map((item) => (
									<ExpertiseExpert key={item.id}>
										<ExpertiseExpertImg src={item.img} alt={item.title} />
										<ExpertiseExpertText>
											<Title variant='h3'>{item.title}</Title>
											<Paragraph variant='bold'>{item.text}</Paragraph>
											<Paragraph color='grey_light_3'>{item.text_2}</Paragraph>
										</ExpertiseExpertText>
									</ExpertiseExpert>
								))}
							</Slider>
						</StaleCarouselWrapper>
					</ExpertiseExperts>
					<ExpertiseAwards as='section'>
						{ENTERPRISE_AWARDS.map((item) => (
							<ExpertiseAward key={item.id}>
								<Title variant='h0'>
									<span>{item.title}</span>
								</Title>
								<Paragraph variant='bold'>{item.text}</Paragraph>
							</ExpertiseAward>
						))}
					</ExpertiseAwards>
				</ExpertiseContainer>
			</Expertise>

			<Values>
				<ValuesContainer>
					<Title variant='h2'>You{'`'}re in good hands with us</Title>
					<ValueItems>
						{VALUES.map((item) => (
							<Value key={item.id}>
								<ValueImg src={item.img} alt={item.title} />
								<Col gap='12px'>
									<Title variant='h3'>{item.title}</Title>
									<Paragraph>{item.text}</Paragraph>
								</Col>
							</Value>
						))}
					</ValueItems>
				</ValuesContainer>
			</Values>

			<Locations as='section'>
				<LocationContainer>
					<Title variant='h2' textAlign='center' mb mbValue='16px'>
						Our Locations
					</Title>
					<Subtitle textAlign='center' maxWidth='730px'>
						Rooted in Ukraine and branching out globally, our diverse locations reflect our international reach and commitment to serving clients worldwide.
					</Subtitle>
					<LocationItems>
						{LOCATIONS.map((item) => (
							<Location key={item.id}>
								<LocationImg src={item.img} alt={item.title} />
								<LocationFlagImg src={item.flag} alt={item.title} />
								<Col gap='12px'>
									<Paragraph variant='bold'>{item.title}</Paragraph>
									<Paragraph>
										{item.text}
										<br />
										<br />
										{item.text_2}
									</Paragraph>
								</Col>
							</Location>
						))}
					</LocationItems>
				</LocationContainer>
			</Locations>

			<CTA as='section'>
				<CTAContainer>
					<CTAFormWrapper>
						<CTAForm as='form'>
							<Title variant='h2'>
								<span>Let{`'`}s grow </span> your business together
							</Title>

							<CTAInputs>
								<CTANameInputs>
									<Input label='First name' placeholder='First Name' name='firstName' type='firstName' onChange={() => {}} value={''} />
									<Input label='Last name' placeholder='Last Name' name='lastName' type='lastName' onChange={() => {}} value={''} />
								</CTANameInputs>
								<Input label='Email' placeholder='john.doe@company.com' name='email' type='email' onChange={() => {}} value={''} />
								<Input label='Project Description' placeholder='Your summary' name='description' type='description' onChange={() => {}} value={''} />
								<StaleInputFile
									accept='.xlsx'
									files={file}
									onChange={setFile}
									onRemoveFile={() => setFile([])}
									multiple={false}
									trigger={
										<Row justifyContent='flex-start' gap='6px'>
											<Icon icon='add_file' width='18px' />
											<Paragraph>Select a file to upload</Paragraph>
										</Row>
									}
									id='file'
								/>
								<Checkbox label='Send me an NDA' checked={checkboxValue} onChange={() => setCheckboxValue((prev) => !prev)} />
							</CTAInputs>

							<Button>Send message</Button>
							<Row mt justifyContent='flex-start' flexWrap='wrap' gap='6px'>
								<Paragraph>By submitting this form you agree to NOXU Solutions</Paragraph>
								<Link href='#' style={{ width: 'fit-content' }} display='inline' color='red'>
									Privacy Policy
								</Link>
							</Row>
						</CTAForm>
						<CTAInfo>
							<CTAImg src='./img/form-bg.png' alt='CTA Image' />
							<CTAInfoItem>
								<CTAListItem>1</CTAListItem>
								<Paragraph>Our CEO Nick will get back to you within 1 business day.</Paragraph>
							</CTAInfoItem>
							<CTAInfoItem>
								<CTAListItem>2</CTAListItem>
								<Paragraph>We will discuss your priorities and expectations to shape a vision of our future collaboration.</Paragraph>
							</CTAInfoItem>
							<CTAInfoItem>
								<CTAListItem>3</CTAListItem>
								<Paragraph>
									Our technical leadership will deep dive into your project idea and suggest the best approach for turning it into a successful product.
								</Paragraph>
							</CTAInfoItem>
						</CTAInfo>
					</CTAFormWrapper>
				</CTAContainer>
			</CTA>

			<Footer as='footer'>
				<FooterContainer>
					<FooterNav>
						<Row>
							<FooterLogo src='./img/logo_light.svg' alt='NOXU Solutions' />
							<FooterSocialLinks>
								<Link href='#'>
									<Icon icon='medium' />
								</Link>
								<Link href='#'>
									<Icon icon='instagram' />
								</Link>
								<Link href='#'>
									<Icon icon='linkedin' />
								</Link>
								<Link href='#'>
									<Icon icon='behance' />
								</Link>
							</FooterSocialLinks>
						</Row>

						<FooterLinksWrapper>
							<Paragraph color='grey_light_3'>NOXU Solutions 2020-2024. All rights reserved.</Paragraph>

							<FooterLinks>
								<Link href='#' color='grey_light_3'>
									Cookie Policy
								</Link>
								<Link href='#' color='grey_light_3'>
									Privacy Policy
								</Link>
								<Link href='#' color='grey_light_3'>
									Terms & Conditions
								</Link>
							</FooterLinks>
						</FooterLinksWrapper>
					</FooterNav>
				</FooterContainer>
			</Footer>
		</>
	);
};

export default Page;
