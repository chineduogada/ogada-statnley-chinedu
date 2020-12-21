import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Skills from "./Skills";
import { Box } from "@chakra-ui/react";

const Main = () => {
	return (
		<Box as='main' py={5} px={{ base: 3, md: 20 }}>
			<AboutMe />
			<Projects />
			<Blogs />
			<Skills />
		</Box>
	);
};

export default Main;

