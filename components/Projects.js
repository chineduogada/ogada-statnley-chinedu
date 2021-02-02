import { Box, Flex } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import Section from "./Section";
import Card from "./Card";
import ButtonLink from "./ButtonLink";

const projects = [
  {
    github: "https://github.com/chineduogada/e-cormerce",
    vercel: "https://e-cormerce.vercel.app/",
    heading: "E-cormerce template",
    description:
      "An e-commerce Next.js template starter, which has Dark-Light mode",
  },
  {
    github: "https://github.com/chineduogada/my-portfolio",
    heading: "My Portfolio",
    description: "My Curriculum vitae",
  },
  {
    github: "https://github.com/chineduogada/react-rapid-carousel",
    npm: "https://www.npmjs.com/package/react-rapid-carousel",
    heading: "React Rapid Carousel",
    description: "A simple but epic React Responsive Carousel.",
  },
  {
    github: "https://github.com/chineduogada/sellit",
    heading: "SellIT.ng",
    description:
      "A website that connects buyers and sellers together, both locally and internationally",
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
