import { Flex, styled } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import Section from "./Section";
import Card from "./Card";
import ButtonLink from "./ButtonLink";

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
		<Section heading='Projects' id='projects' textAlign='center'>
			<Flex wrap='wrap' justifyContent='center'>
				{projects.map((project, index) => (
					<Card {...project} key={index} />
				))}
			</Flex>

			<ButtonLink
				href='https://github.com/chineduogada?tab=repositories'
				icon={<AiFillGithub style={{ fontSize: "20px" }} />}
			>
				See All
			</ButtonLink>
		</Section>
	);
};

export default Projects;

