import { Box, Heading } from "@chakra-ui/react";

const Section = ({ heading, id, children, ...rest }) => {
	return (
		<section className='section' id={id}>
			<Box id={id} {...rest} mb={10}>
				<Heading
					as='h3'
					size='lg'
					className='section__heading'
					color='brand.900'
					mt={4}
				>
					{heading}
				</Heading>

				<Box as='main'>{children}</Box>
			</Box>
		</section>
	);
};

export default Section;

