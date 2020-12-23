import { Badge, Box } from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import Section from "./Section";

const Education = () => {
	return (
		<Section heading='Education' id='education'>
			<Box as='article' p={2} mb={3} shadow='xs' rounded='md'>
				<Box>
					<Badge fontSize='md'>degree</Badge>
					<Paragraph ml={3}>
						Bachelor of Science (BSC) in Computer Science
					</Paragraph>
				</Box>

				<Box>
					<Badge fontSize='md'>school</Badge>
					<Paragraph ml={3}>Les Cours Sonou University Cotonou</Paragraph>
				</Box>

				<Box>
					<Badge fontSize='md'>duration</Badge>
					<Paragraph ml={3}>September 2017 to 2020</Paragraph>
				</Box>
			</Box>
		</Section>
	);
};

export default Education;

