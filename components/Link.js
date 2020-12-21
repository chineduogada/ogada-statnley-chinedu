import { Text } from "@chakra-ui/react";
import LinkNext from "next/link";

const Link = ({ href, children, ...rest }) => {
	return (
		<LinkNext href={href}>
			<a {...rest}>
				<Text color='brand.700' _hover={{ textDecor: "underline" }}>
					{children}
				</Text>
			</a>
		</LinkNext>
	);
};

export default Link;

