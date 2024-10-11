/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Icon from '../components/Icon/Icon';
import Link from '../components/Link/Link';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { Col, Row } from '../components/Containers';
import Counter from '../components/Counter/Counter';
import { Pill } from '../components/Pill/Pill.styles';
import Checkbox from '../components/Checkbox/Checkbox';
import SliderArrow from '../components/SliderArrow/SliderArrow';
import { Paragraph, Subtitle, Title } from '../components/Typography';
import StaleInputFile from '../components/StaleInputFile/StaleInputFile';
import { ArrowsContainer, StaleCarouselWrapper } from '../components/StaleCarousel.styles';

import { Header, HeaderContainer, HeaderLogo, HeaderNav } from '../components/Header';
import { Value, ValueImg, ValueItems, Values, ValuesContainer } from '../components/Values';
import { Location, LocationContainer, LocationFlagImg, LocationImg, LocationItems, Locations } from '../components/Locations';
import {
	Footer,
	FooterContainer,
	FooterLinks,
	FooterLinksWrapper,
	FooterLogo,
	FooterNav,
	FooterSocialLinks,
	FooterSocialLinksWrapper,
} from '../components/Footer';
import { Hero, HeroAward, HeroAwards, HeroBigImg, HeroButtonWrapper, HeroContainer, HeroImg, HeroInfo, HeroTexts } from '../components/Hero';
import { CTA, CTAContainer, CTAForm, CTAFormWrapper, CTAImg, CTAInfo, CTAInfoItem, CTAInputs, CTAListItem, CTANameInputs } from '../components/CTA';
import { Service, ServiceImg, ServiceInfoItem, ServiceInfoItems, ServiceItems, ServiceTexts, Services, ServicesContainer } from '../components/Services';
import { Work, WorkFlagImg, WorkItems, WorkSpecs, WorkSpecsRow, WorkStack, WorkStackImg, WorkTexts, Works, WorksContainer } from '../components/Works';
import {
	Expertise,
	ExpertiseAwards,
	ExpertiseContainer,
	ExpertiseExpert,
	ExpertiseExpertImg,
	ExpertiseExpertText,
	ExpertiseExperts,
} from '../components/Expertise';
import {
	Testimonial,
	TestimonialImg,
	TestimonialItems,
	TestimonialPersonImg,
	TestimonialTexts,
	Testimonials,
	TestimonialsContainer,
} from '../components/Testimonials';

import {
	AWARDS,
	ENTERPRISE_AWARDS,
	ENTERPRISE_EXPERTS,
	expertiseSettings,
	LOCATIONS,
	SERVICES,
	TESTIMONIALS,
	testimonialsSettings,
	VALUES,
	WORKS,
} from 'variables';
import RiveAnimation from 'components/RiveAnimation/RiveAnimation';
import Textarea from 'components/Textarea/Textarea';
import Popup from 'components/Popup/Popup';

const Index = () => {
	const router = useRouter();
	// const [file, setFile] = useState<any>();
	const [isLoading, setIsLoading] = useState(false);
	const [checkboxValue, setCheckboxValue] = useState(false);
	const testimonialsSlider = useRef(null);
	const expertiseSlider = useRef(null);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [description, setDescription] = useState('');
	const [openThanksPopup, setOpenThanksPopup] = useState(false);

	const handleSubmit = (e) => {
		try {
			if (!firstName || !lastName || !email) {
				return;
			}

			setIsLoading(true);
			e.preventDefault();

			const text = `
			%0A New request: 
			%0A Full Name: ${firstName + ' ' + lastName} 
			%0A Email: ${email}
			%0A Description: ${description || 'No description provided'}
			%0A Send NDA: ${checkboxValue ? 'Yes' : 'No'}
			`;

			const link = `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage?chat_id=${process.env.TG_CHAT_ID}&text=${text}`;

			let api = new XMLHttpRequest();
			api.open('POST', link, true);
			api.send();

			setFirstName('');
			setLastName('');
			setEmail('');
			setDescription('');
			setCheckboxValue(false);

			setOpenThanksPopup(true);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
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
						<Link variant='button' href='/#contact-form' size='small' withIcon>
							Contact Us
						</Link>
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
							<HeroButtonWrapper>
								<Link variant='button' href='/#contact-form' withIcon mt mtValue='32px'>
									Schedule a call
								</Link>
							</HeroButtonWrapper>
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
									<Link href='/#contact-form' size='small' withIcon>
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
								<RiveAnimation src={item.img} color={item.color} />

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
							<Counter key={item.id} text={item.text} endNumber={item.count} title={item.title} duration={2000} />
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

			<CTA as='section' id='contact-form'>
				<CTAContainer>
					<CTAFormWrapper>
						<CTAForm as='form' onSubmit={handleSubmit}>
							<Title variant='h2'>
								<span>Let{`'`}s grow </span> your business together
							</Title>

							<CTAInputs>
								<CTANameInputs>
									<Input
										label='First name'
										placeholder='First Name'
										name='firstName'
										type='firstName'
										required
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
									<Input
										label='Last name'
										placeholder='Last Name'
										name='lastName'
										type='lastName'
										required
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</CTANameInputs>
								<Input
									label='Email'
									placeholder='john.doe@company.com'
									name='email'
									required
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Textarea
									label='Project Description'
									placeholder='Your summary'
									name='description'
									onChange={(e) => setDescription(e.target.value)}
									value={description}
								/>
								{/* <StaleInputFile
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
								/> */}
								<Checkbox label='Send me an NDA' checked={checkboxValue} onChange={() => setCheckboxValue((prev) => !prev)} />
							</CTAInputs>

							<Button disabled={isLoading}>Send message</Button>

							<Row mt justifyContent='flex-start' flexWrap='wrap' gap='6px'>
								<Paragraph>By submitting this form you agree to NOXU Solutions</Paragraph>
								<Link
									target='_blank'
									href='https://docs.google.com/document/d/1HlvBqB3WrWN1M94AVKWDnhJs7mwY1MvDN-RCcZQrmFw/edit?usp=sharing'
									style={{ width: 'fit-content' }}
									display='inline'
									color='red'>
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
						<FooterSocialLinksWrapper>
							<FooterLogo src='./img/logo_light.svg' alt='NOXU Solutions' />
							<FooterSocialLinks>
								<Link target='_blank' rel='nofollow' href='https://medium.com/@asknoxusolutions'>
									<Icon icon='medium' />
								</Link>
								<Link target='_blank' rel='nofollow' href='https://www.instagram.com/noxusolutions/'>
									<Icon icon='instagram' />
								</Link>
								<Link target='_blank' rel='nofollow' href='https://www.linkedin.com/company/noxu-solutions-ltd/about/?viewAsMember=true'>
									<Icon icon='linkedin' />
								</Link>
								<Link target='_blank' rel='nofollow' href='#'>
									<Icon icon='behance' />
								</Link>
							</FooterSocialLinks>
						</FooterSocialLinksWrapper>

						<FooterLinksWrapper>
							<Paragraph color='grey_light_3'>NOXU Solutions 2020-2024. All rights reserved.</Paragraph>

							<FooterLinks>
								<Link href='#' color='grey_light_3'>
									Cookie Policy
								</Link>
								<Link
									target='_blank'
									href='https://docs.google.com/document/d/1HlvBqB3WrWN1M94AVKWDnhJs7mwY1MvDN-RCcZQrmFw/edit?usp=sharing'
									color='grey_light_3'>
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

			{openThanksPopup && (
				<Popup width='347px' HeaderContent={<Title variant='h4'>Thank you!</Title>} onClose={() => setOpenThanksPopup(false)}>
					<Paragraph mb variant='bold'>
						Your request was successfully sent.
					</Paragraph>

					<Paragraph>We will get back to you within one business day.</Paragraph>

					<Button mt mtValue='32px' onClick={() => setOpenThanksPopup(false)}>
						Close
					</Button>
				</Popup>
			)}
		</>
	);
};

export default Index;
