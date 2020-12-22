import { Box } from "@chakra-ui/react";
import { BsChevronDoubleUp } from "react-icons/bs";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";

const Footer = () => {
	return (
		<Box as='footer' textAlign='center' bg='gray.100' p={3} mb={3}>
			<Box textAlign='right'>
				<ButtonLink
					icon={<BsChevronDoubleUp />}
					isRound
					color='white'
					bg='brand.800'
					fontSize='lg'
					href='/#header'
					newPage={false}
				/>
			</Box>

			<Paragraph>Proudly made in Nigeria</Paragraph>
		</Box>
	);
};

export default Footer;

