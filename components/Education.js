import { Badge, Box, Flex } from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import Section from "./Section";

const Education = () => {
  return (
    <Section heading="Education" id="education">
      <Box as="article" p={2} mb={3}>
        <Flex alignItems="center" flexWrap="wrap">
          <Badge fontSize="md">degree</Badge>
          <Paragraph mb={0} ml={2}>
            Bachelor of Science (BSC) in Computer Science
          </Paragraph>
        </Flex>

        <Flex alignItems="center" flexWrap="wrap">
          <Badge fontSize="md">school</Badge>
          <Paragraph mb={0} ml={2}>
            Les Cours Sonou University Cotonou
          </Paragraph>
        </Flex>

        <Flex alignItems="center" flexWrap="wrap">
          <Badge fontSize="md">duration</Badge>
          <Paragraph mb={0} ml={2}>
            September 2017 to 2020
          </Paragraph>
        </Flex>
      </Box>
    </Section>
  );
};

export default Education;
