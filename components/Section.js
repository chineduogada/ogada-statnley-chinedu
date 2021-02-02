import { Box, Heading } from "@chakra-ui/react";

const Section = ({ heading, id, children, textAlign, ...rest }) => {
  return (
    <section className="section" id={id}>
      <Box
        id={id}
        {...rest}
        pt={10}
        textAlign={{ base: "center", md: textAlign || "left" }}
      >
        <Heading
          as="h3"
          size="lg"
          className="section__heading"
          color="brand.900"
          my={4}
        >
          {heading}
        </Heading>

        <Box as="main" p={2} pb={5} borderBottom="1px" borderColor="gray.300">
          {children}
        </Box>
      </Box>
    </section>
  );
};

export default Section;
