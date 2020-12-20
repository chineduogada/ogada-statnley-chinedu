import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const TextLink = ({ icon, link, text, color, newPage = true }) => {
	return (
		<Text
			as='a'
			href={link}
			p={2}
			shadow='md'
			borderRadius='5px'
			color={color || "brand.700"}
			transition='.2s'
			_hover={{
				shadow: "none",
				textDecor: "underline",
			}}
			target={newPage && "blank"}
		>
			{icon ? (
				<>
					<Image width='20px' height='20px' src={icon} alt={text} />

					<span style={{ marginLeft: "5px" }}>{text}</span>
				</>
			) : (
				text
			)}
		</Text>
	);
};

export default TextLink;

