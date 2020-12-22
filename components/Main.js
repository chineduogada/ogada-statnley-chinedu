import { Box } from "@chakra-ui/react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

const Main = () => {
	return (
		<Box as='main' py={5} px={{ base: 3, md: 20 }}>
			<AboutMe />
			<Projects />
			<Education />
			<Blogs />
			<Skills />
			<Contact />
		</Box>
	);
};

export default Main;

