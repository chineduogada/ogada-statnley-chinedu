import { Box, Heading } from "@chakra-ui/react";

const Section = ({ heading, id, children, ...rest }) => {
	return (
		<section className='section' id={id}>
			<Box id={id} {...rest} pt={10}>
				<Heading
					as='h3'
					size='lg'
					className='section__heading'
					color='brand.900'
					my={5}
				>
					{heading}
				</Heading>

				<Box as='main' p={2}>
					{children}
				</Box>
			</Box>
		</section>
	);
};

export default Section;

