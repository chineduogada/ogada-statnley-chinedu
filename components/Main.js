import Link from "next/link";
import { Box, Button } from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import Section from "./Section";
import TextLink from "./TextLink";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Blogs from "./Blogs";

const Main = () => {
	return (
		<Box as='main' maxW='650px' m='0 auto' p={3}>
			<AboutMe />

			<Projects />

			<Skills />

			<Blogs />
		</Box>
	);
};

export default Main;

