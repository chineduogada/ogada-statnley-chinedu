import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { GiHand } from "react-icons/gi";

const Header = () => {
  return (
    <Flex
      as="header"
      minH="400px"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      mb={8}
      id="header"
      textAlign={{ base: "center", md: "left" }}
    >
      <Box
        mr="3"
        overflow="hidden"
        borderRadius="10px 0 10px 0"
        h={200}
        w={200}
      >
        <Image
          layout="fixed"
          height={200}
          width={200}
          src="/img/me.jpg"
          alt="me"
          quality="100"
        />
      </Box>

      <Heading className="heading" as="h1" size="2xl">
        Hi there{" "}
        <Box d="inline-block" ml={2} transform="translateY(6px)">
          <GiHand />
        </Box>
        ,
        <br />i am{" "}
        <Box className="heading__bold" as="span" color="brand.700">
          Stanley C. Ogada
        </Box>
        ,
        <br />a{" "}
        <Box className="heading__bold" as="span" color="brand.700">
          Frontend Web Developer
        </Box>
      </Heading>
    </Flex>
  );
};

export default Header;
