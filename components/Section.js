import { Box, Heading } from "@chakra-ui/react";

const Section = ({ heading, children, ...rest }) => {
	return (
		<Box as='section' className='section' {...rest} mb={5}>
			<Heading
				as='h3'
				size='lg'
				className='section__heading'
				color='brand.900'
				mb={4}
			>
				{heading}
			</Heading>

			<Box as='main'>{children}</Box>
		</Box>
	);
};

export default Section;

