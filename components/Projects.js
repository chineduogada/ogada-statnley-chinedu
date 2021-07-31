import { Box, Flex } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import Section from "./Section";
import Card from "./Card";
import ButtonLink from "./ButtonLink";

const projects = [
  {
    github: "https://github.com/chineduogada",
    vercel: "https://www.silverdream.ng",
    heading: "SilverDream.ng",
    description:
      "An E-commerce platform owned by Silver Dream, for selling products to their new and existing customers...",
  },
  {
    github: "https://github.com/chineduogada/deal-vend",
    heading: "DealVend",
    description: "An E-commerce side project, with authentication, homepage, product-detail-page...",
  },

  {

    github: "https://github.com/chineduogada/deal-vend",
vercel: 'https://deal-vend.herokuapp.com/api/v1/products',
    heading: "DealVend API",

    description: "The REST api for DealVend client, built using NodeJs, Express, JWT (authentication), MongoDB, etc.",

  },
  {
    github: "https://github.com/chineduogada/react-rapid-carousel",
    npm: "https://www.npmjs.com/package/react-rapid-carousel",
    heading: "React Rapid Carousel",
    description: "A simple but epic React Responsive Carousel.",
  },
];

const Projects = () => {
  return (
    <Section heading="Projects" id="projects" textAlign="center">
      <Flex wrap="wrap" justifyContent="center">
        {projects.map((project, index) => (
          <Card {...project} key={index} />
        ))}
      </Flex>

      <Box textAlign="right">
        <ButtonLink
          href="https://github.com/chineduogada?tab=repositories"
          icon={<AiFillGithub style={{ fontSize: "20px" }} />}
        >
          See All
        </ButtonLink>
      </Box>
    </Section>
  );
};

export default Projects;
