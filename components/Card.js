import Link from "next/link";
import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { IoLogoNpm } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { TiChevronRight } from "react-icons/ti";

import truncate from "../utils/truncate";
import ButtonLink from "./ButtonLink";

const renderIcon = (link, icon) => (
  <Link href={link}>
    <a target="blank">
      <IconButton isRound mr={2} fontSize="xl">
        {icon}
      </IconButton>
    </a>
  </Link>
);

const Card = ({ github, vercel, npm, heading, description }) => {
  return (
    <Flex
      p={3}
      m={3}
      borderRadius="md"
      shadow="sm"
      width={{ base: "100%", sm: "225px", md: "250px" }}
      height="200px"
      direction="column"
      justifyContent="space-between"
      as="article"
      textAlign="left"
      transition=".05s ease-in"
      _hover={{
        transform: "scale(1.05)",
        shadow: "md",
      }}
    >
      <Box as="header">
        <Heading as="h4" className="section__heading" fontSize="lg" mb={3}>
          {heading}
        </Heading>
        <Text>{truncate(description, 60)}</Text>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" as="footer">
        <Flex fontSize="2xl">
          {renderIcon(github, <AiFillGithub />)}

          {npm && renderIcon(npm, <IoLogoNpm />)}
        </Flex>

        {vercel && (
          <ButtonLink
            href={vercel}
            icon={<TiChevronRight />}
            newPage
            size="sm"
            variant="ghost"
          >
            Preview Website
          </ButtonLink>
        )}
      </Flex>
    </Flex>
  );
};

export default Card;
