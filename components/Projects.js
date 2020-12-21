import Section from "./Section";
import Card from "./Card";
import { Flex } from "@chakra-ui/react";

const projects = [
	{
		github: "https://github.com/chineduogada",
		heading: "React Rapid Carousel",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi delectus iusto illum nam architecto nostrum ducimus minus consequuntur voluptate!",
	},
	{
		github: "https://github.com/chineduogada",
		vercel: "https://github.com/chineduogada",
		heading: "React Rapid Carousel",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi delectus iusto illum nam architecto nostrum ducimus minus consequuntur voluptate!",
	},
	{
		github: "https://github.com/chineduogada",
		vercel: "https://github.com/chineduogada",
		npm: "https://github.com/chineduogada",
		heading: "React Rapid Carousel",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi delectus iusto illum nam architecto nostrum ducimus minus consequuntur voluptate!",
	},
	{
		github: "https://github.com/chineduogada",
		heading: "React Rapid Carousel",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sequi delectus iusto illum nam architecto nostrum ducimus minus consequuntur voluptate!",
	},
];

const Projects = () => {
	return (
		<Section heading='Projects' id='projects'>
			<Flex wrap='wrap' justifyContent='center'>
				{projects.map((project, index) => (
					<Card {...project} key={index} />
				))}
			</Flex>
		</Section>
	);
};

export default Projects;

