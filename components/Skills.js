import { FaReact, FaCss3Alt } from "react-icons/fa";
import {
	SiNodeDotJs,
	SiHtml5,
	SiJavascript,
	SiSass,
	SiStyledComponents,
	SiMongodb,
	SiJest,
	SiBootstrap,
	SiMaterialUi,
	SiVisualstudiocode,
	SiNpm,
	SiRedis,
	SiNextDotJs,
	SiPostman,
	SiTravisci,
	SiAmazonaws,
} from "react-icons/si";
import { AiFillGithub, AiFillMediumSquare } from "react-icons/ai";
import { DiGit } from "react-icons/di";
import { CgBolt } from "react-icons/cg";
import { IoLogoVercel } from "react-icons/io5";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Section from "./Section";
import Paragraph from "./Paragraph";

const data = [
	{
		title: "Frontend",
		data: [
			{
				name: "Html5",
				link:
					"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
				icon: <SiHtml5 />,
				color: "red.500",
			},
			{
				name: "Css3Alt",
				link: "https://developer.mozilla.org/en-US/docs/Archive/CSS3",
				icon: <FaCss3Alt />,
				color: "blue.500",
			},
			{
				name: "Javascript",
				link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				icon: <SiJavascript />,
				color: "yellow.300",
			},
			{
				name: "Bootstrap",
				link: "https://getbootstrap.com/",
				icon: <SiBootstrap />,
				color: "purple.400",
			},
			{
				name: "Sass",
				link: "https://sass-lang.com/",
				icon: <SiSass />,
				color: "pink.600",
			},
			{
				name: "React",
				link: "https://reactjs.org/",
				icon: <FaReact />,
				color: "blue.500",
			},
			{
				name: "NextDotJs",
				link: "https://nextjs.org/",
				icon: <SiNextDotJs />,
			},
			{
				name: "MaterialUi",
				link: "https://material-ui.com/",
				icon: <SiMaterialUi />,
				color: "blue.600",
			},
			{
				name: "StyledComponents",
				link: "https://www.styled-components.com/",
				icon: <SiStyledComponents />,
				color: "pink.500",
			},
			{
				name: "ChakraUI",
				link: "https://chakra-ui.com/",
				icon: <CgBolt />,
				color: "teal.500",
			},
			{
				name: "Jest",
				link: "https://jestjs.io/",
				icon: <SiJest />,
				color: "green.600",
			},
		],
	},
	{
		title: "Backend",
		data: [
			{
				name: "NodeDotJs",
				link: "https://nodejs.org/",
				icon: <SiNodeDotJs />,
				color: "green.500",
			},
			{
				name: "Mongodb",
				link: "https://www.mongodb.com/",
				icon: <SiMongodb />,
				color: "green.600",
			},
			{
				name: "Redis",
				link: "https://redis.io/",
				icon: <SiRedis />,
				color: "red.600",
			},
			{
				name: "Jest",
				link: "https://jestjs.io/",
				icon: <SiJest />,
				color: "green.600",
			},
			{
				name: "Postman",
				link: "https://www.postman.com/",
				icon: <SiPostman />,
				color: "orange.500",
			},
		],
	},
	{
		title: "Tools & Services",
		data: [
			{
				name: "Git",
				link: "https://git-scm.com/",
				icon: <DiGit />,
				color: "red.600",
			},
			{
				name: "FillGithub",
				link: "https://github.com/",
				icon: <AiFillGithub />,
			},
			{
				name: "Travisci",
				link: "https://travis-ci.org/",
				icon: <SiTravisci />,
				color: "yellow.900",
			},
			{
				name: "LogoVercel",
				link: "https://vercel.com/",
				icon: <IoLogoVercel />,
			},
			{
				name: "Amazon Web Services",
				link: "https://aws.amazon.com/",
				icon: <SiAmazonaws />,
				color: "blue.400",
			},
			{
				name: "Npm",
				link: "https://www.npmjs.com/",
				icon: <SiNpm />,
				color: "red.600",
			},
			{
				name: "Visualstudiocode",
				link: "https://code.visualstudio.com/",
				icon: <SiVisualstudiocode />,
				color: "blue.400",
			},
			{
				name: "FillMediumSquare",
				link: "https://medium.com/",
				icon: <AiFillMediumSquare />,
			},
		],
	},
];

const Skills = () => {
	return (
		<Section heading='Skills' id='skills'>
			<Paragraph>
				I’ve spent about two years on improving my skills in website
				development using PHP and Javascript that I’m now pretty confident
				in building apps using these tools:
			</Paragraph>

			{data.map(({ title, data }, idx) => (
				<Box as='article' key={idx}>
					<Heading
						as='h4'
						className='section__heading'
						fontSize='lg'
						mb={3}
					>
						{title}
					</Heading>

					<Flex justifyContent='center' wrap='wrap' as='main' p={1}>
						{data.map(({ name, link, color, icon }, index) => (
							<a href={link} target='link' key={index}>
								<Box
									width='30px'
									m={5}
									transform='scale(2.5)'
									transition='.3s'
									color='gray.600'
									_hover={{
										color,
										transform: "scale(3)",
									}}
								>
									{icon}
								</Box>
							</a>
						))}
					</Flex>
				</Box>
			))}
		</Section>
	);
};

export default Skills;

