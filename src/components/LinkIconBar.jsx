/* eslint-disable react-hooks/rules-of-hooks */
import {
	Icon,
	Link,
	Stack,
	Tooltip,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa';

import { colors } from '../theme';

const icons = {
	linkedin: FaLinkedin,
	youtube: FaYoutubeSquare,
    facebook: FaFacebookSquare,
    instagram: FaInstagram,
};

const LinkIcon = ({ index, color, onHoverColor, url, label, icon }) => (
	<Tooltip
		label={label}
		aria-label={`${label}-tooltip`}
		key={`link-${index}`}
	>
		<Link
			aria-label={`Open link to ${url}`}
			display='inline-block'
			href={url}
			isExternal
		>
			<Icon
				as={icons[icon]}
				fontSize='2.5em'
				color={color}
				_hover={{ color: onHoverColor }}
			/>
		</Link>
	</Tooltip>
);

const LinkIconBar = ({ links, color, onHoverColor, ...props }) => {
	const iconColor =
		color || useColorModeValue(colors.subtle.light, colors.subtle.dark);
	const hoverColor =
		onHoverColor ||
		useColorModeValue(colors.secondary.light, colors.secondary.dark);

	return (
		<Stack
			mt={4}
			direction='row'
			spacing='12px'
			justify='center'
			// style={{ justifyContent: 'flex-start'}}
			mb={10}
			{...props}
		>
			{links.map((link, index) => (
				<LinkIcon
					key={link.label}
					index={index}
					color={iconColor}
					onHoverColor={hoverColor}
					{...link}
				/>
			))}
		</Stack>
	);
};

export default LinkIconBar;