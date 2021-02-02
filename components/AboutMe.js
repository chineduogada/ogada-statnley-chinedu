import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Paragraph from "./Paragraph";
import Section from "./Section";
import TextLink from "./TextLink";
import {
  SiJavascript,
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Section heading="About Me" id="about-me">
      <Paragraph>
        I’m currently working as a freelance fullstack developer. I specialize
        in front end development. I am Experienced with all stages of the
        development cycle for dynamic web projects. Well-versed in numerous
        technologies including:
        <TextLink
          href="https://nodejs.org/"
          icon={<SiJavascript />}
          color="yellow.400"
        >
          JavaScript
        </TextLink>{" "}
        ,{" "}
        <TextLink
          href="https://nodejs.org/"
          icon={<FaReact />}
          color="blue.500"
        >
          React.js
        </TextLink>{" "}
        /{" "}
        <TextLink
          href="https://nodejs.org/"
          icon={<SiNextDotJs />}
          color="#333"
        >
          Next.js
        </TextLink>{" "}
        ,{" "}
        <TextLink
          href="https://nodejs.org/"
          icon={<SiNodeDotJs />}
          color="teal.500"
        >
          Node.js
        </TextLink>{" "}
        /{" "}
        <TextLink href="https://nodejs.org/" color="teal.500">
          Express
        </TextLink>{" "}
        ,{" "}
        <TextLink
          href="https://nodejs.org/"
          icon={<SiMongodb />}
          color="green.600"
        >
          MongoDB
        </TextLink>{" "}
        ,etc.
      </Paragraph>

      <Paragraph>
        I carry out quality assurance tests to discover errors and optimize
        usability. I am well skilled and open to learn new technologies. I am
        looking forward to working with a good team.
      </Paragraph>

      <Link href="/doc/OGADA_STANLEY_CHINEDU(web-developer).pdf">
        <a target="blank">
          <Button colorScheme="blue">Download My Resume</Button>
        </a>
      </Link>
    </Section>
  );
};

export default AboutMe;
