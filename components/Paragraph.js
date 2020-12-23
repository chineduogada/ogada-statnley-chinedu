import { Text } from "@chakra-ui/react";

const Paragraph = ({ children, ...rest }) => {
	return (
		<Text {...rest} lineHeight='2.5' mb={4} fontWeight='500' color='gray.600'>
			{children}
		</Text>
	);
};

export default Paragraph;

