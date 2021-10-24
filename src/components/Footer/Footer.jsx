import {
	Box,
	Button,
	chakra,
	Container,
	Divider,
	Image,
	Link,
	SimpleGrid,
	Stack,
	Text,
	Tooltip,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import whiteLogo from '../../assets/Padhakku White.png';
import blueLogo from '../../assets/Padhakku Blue.png';
import discordLogo from '../../assets/Discord.png';
import playStoreLogo from '../../assets/Playstore.png';
import copyright from '../../assets/copyright-symbol-png-11447.png';
import LinkIconBar from '../LinkIconBar';
import links from '../../data/footerLinks';
import './Footer.css';

const Logo = () => {
	// const logo = useColorModeValue(blueLogo, whiteLogo);
	const logo = useColorModeValue(whiteLogo, blueLogo);

	return (
		<Image
			className='logo'
			alt='logo'
			src={logo}
			htmlHeight='45px'
			htmlWidth='200px'
		/>
	);
};

const SocialButton = ({ children, label, href }) => {
	return (
		<Tooltip hasArrow label={label}>
			<chakra.button
				cursor={'pointer'}
				as={'a'}
				href={href}
				display={'inline-flex'}
				alignItems={'center'}
				justifyContent={'center'}
				transition={'background 0.3s ease'}
				style={{ width: '140px' }}
				target='_blank'
			>
				{children}
			</chakra.button>
		</Tooltip>
	);
};

const ListHeader = ({ children }) => {
	return (
		<Text
			fontWeight={'600'}
			fontSize={'xl'}
			mb={2}
			fontFamily={'JetBrains Mono Medium'}
		>
			{children}
		</Text>
	);
};

const ContactUsForm = () => {
	const toast = useToast();

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				message: '',
			}}
			validationSchema={Yup.object().shape({
				name: Yup.string().required('Required'),
				email: Yup.string().email('Invalid').required('Required'),
				message: Yup.string().required('Required'),
			})}
			onSubmit={() => {
				toast({
					title: 'Thanks For Contacting Us!!',
					description: 'We will reach you shortly.',
					position: 'top',
					duration: '5000',
					status: 'success',
					isClosable: true,
				});
			}}
		>
			{({ errors, status, touched }) => (
				<Form>
					<Stack as='fieldset' className='footer-fieldset'>
						<Stack direction='row' style={{ marginBottom: '20px' }}>
							<Stack as='fieldset' className='footer-fieldset'>
								<Field
									type='text'
									name='name'
									placeholder='Name*'
									className={
										'form-control' +
										(errors.name && touched.name
											? ' is-invalid'
											: '')
									}
								/>
								<ErrorMessage
									name='name'
									component='div'
									className='invalid-feedback'
								/>
							</Stack>
							<Stack as='fieldset' className='footer-fieldset'>
								<Field
									type='text'
									name='email'
									placeholder='Email*'
									className={
										'form-control' +
										(errors.email && touched.email
											? ' is-invalid'
											: '')
									}
								/>
								<ErrorMessage
									name='email'
									component='div'
									className='invalid-feedback'
								/>
							</Stack>
						</Stack>
						<Stack as='fieldset' className='footer-fieldset'>
							<Field
								as='textarea'
								rows='2'
								type='text'
								name='message'
								placeholder='Type your message here*'
								className={
									'form-control' +
									(errors.message && touched.message
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='message'
								component='div'
								className='invalid-feedback'
							/>
						</Stack>
					</Stack>
					<Stack style={{ minWidth: '100%' }}>
						<Button
							type='submit'
							// w={235}
							h={54}
							// backgroundColor="#28b498"
							backgroundColor='#FF9800'
							_hover={{ bg: '#FF9800' }}
							borderRadius={30}
							outline={0}
							border='none'
							justifyContent='center'
							color='#fff'
							alignItems='center'
							// fontFamily="'GothamPro Medium', serif"
							fontSize='0.875rem'
							lineHeight={16}
							textAlign='center'
							margin='32px 0 7px 0'
						>
							Submit
						</Button>
						<Text className='required'>
							All fields marked with an * are required
						</Text>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

const Footer = () => {
	return (
		<Box
			bg={useColorModeValue('#23283b', 'gray.900')}
			color={useColorModeValue('white', 'gray.200')}
			as='footer'
		>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={10}
				style={{ minWidth: '90vw' }}
			>
				<SimpleGrid
					templateColumns={{
						sm: '1fr 1fr',
						md: '2fr 0.9fr 0.8fr 1fr 0.01fr 2.5fr',
					}}
					spacing={6}
				>
					<Stack spacing={6}>
						<Box margin='0 auto'>
							<Logo />
						</Box>
						<Stack
							direction='row'
							style={{ justifyContent: 'center' }}
						>
							<SocialButton
								label='Join Us!!'
								href='https://discord.gg/ewqSxYTNQa'
							>
								<Image
									className='discordLogo'
									alt='Discord'
									// src={discordLogo}
									src={discordLogo}
								/>
							</SocialButton>
							<SocialButton
								label='Download'
								href='https://play.google.com/store/apps/details?id=com.padhakku'
							>
								<Image
									className='playStoreLogo'
									alt='Play Store'
									src={playStoreLogo}
								/>
							</SocialButton>
						</Stack>
						<LinkIconBar links={links} />
						<Text
							fontSize='sm'
							className='copyright'
							style={{ textAlign: 'center' }}
						>
							{/* <Text fontSize='lg' display="inline-block">
                              ©
                              </Text> */}
							<Image
								src={copyright}
								htmlHeight='15px'
								htmlWidth='15px'
								display='inline-block'
								margin='1px'
							/>
							{new Date().getFullYear()} Padhakku Peek A Book Pvt
							Ltd
						</Text>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Company</ListHeader>
						<Link href={'#'}>About us</Link>
						<Link href={'#'}>Privacy Policy</Link>
						<Link href={'#'}>Terms and Conditions</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Colleges</ListHeader>
						<Link href={'#'}>PEC</Link>
						<Link href={'#'}>CCET</Link>
						<Link href={'#'}>UIET</Link>
						<Link href={'#'}>MSIT</Link>
						<Link href={'#'}>Others</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>EPDFs</ListHeader>
						<ListHeader>Placement Prep</ListHeader>
						<Link href={'#'}>Resume Report</Link>
						<Link href={'#'}>Placement Insights</Link>
						<Link href={'#'}>Mentorship</Link>
					</Stack>
					<Divider
						orientation='vertical'
						style={{
							width: '1px',
							background: 'white',
							height: '100%',
						}}
					/>
					<Stack align={'flex-start'}>
						<ListHeader>
							Can't Find Something? Get in Touch.
						</ListHeader>
						<Stack direction='row'>
							<ContactUsForm />
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
};

export default Footer;
