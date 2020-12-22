import Section from "./Section";
import { FaNode, FaReact, FaCss3Alt } from "react-icons/fa";
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

const data = [
	{
		title: "Frontend",
		data: [
			{ name: "Html5", link: "", icon: <SiHtml5 />, color: "red.500" },
			{ name: "Css3Alt", link: "", icon: <FaCss3Alt />, color: "blue.500" },
			{
				name: "Javascript",
				link: "",
				icon: <SiJavascript />,
				color: "yellow.400",
			},
			{
				name: "Bootstrap",
				link: "",
				icon: <SiBootstrap />,
				color: "purple.400",
			},
			{ name: "Sass", link: "", icon: <SiSass />, color: "pink.600" },
			{ name: "React", link: "", icon: <FaReact />, color: "blue.500" },
			{ name: "NextDotJs", link: "", icon: <SiNextDotJs /> },
			{
				name: "MaterialUi",
				link: "",
				icon: <SiMaterialUi />,
				color: "blue.600",
			},
			{
				name: "StyledComponents",
				link: "",
				icon: <SiStyledComponents />,
				color: "pink.500",
			},
			{ name: "ChakraUI", link: "", icon: <CgBolt />, color: "teal.500" },
			{ name: "Jest", link: "", icon: <SiJest /> },
		],
	},
	{
		title: "Backend",
		data: [
			{
				name: "NodeDotJs",
				link: "",
				icon: <SiNodeDotJs />,
				color: "green.500",
			},
			{ name: "Mongodb", link: "", icon: <SiMongodb />, color: "green.600" },
			{ name: "Redis", link: "", icon: <SiRedis />, color: "red.600" },
			{ name: "Jest", link: "", icon: <SiJest /> },
			{
				name: "Postman",
				link: "",
				icon: <SiPostman />,
				color: "orange.500",
			},
		],
	},
	{
		title: "Tools & Services",
		data: [
			{ name: "Git", link: "", icon: <DiGit />, color: "red.600" },
			{
				name: "FillGithub",
				link: "",
				icon: <AiFillGithub />,
			},
			{ name: "Travisci", link: "", icon: <SiTravisci />, color: "red" },
			{ name: "LogoVercel", link: "", icon: <IoLogoVercel />, color: "red" },
			{
				name: "Amazon Web Services",
				link: "",
				icon: <SiAmazonaws />,
				color: "blue.400",
			},
			{ name: "Npm", link: "", icon: <SiNpm />, color: "red.600" },
			{
				name: "Visualstudiocode",
				link: "",
				icon: <SiVisualstudiocode />,
				color: "blue.400",
			},
			{
				name: "FillMediumSquare",
				link: "",
				icon: <AiFillMediumSquare />,
				color: "red",
			},
		],
	},
];

const Skills = () => {
	return (
		<Section heading='Skills' id='skills'>
			{data.map(({ title, data }) => (
				<Box as='article'>
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
							<Box
								key={index}
								width='30px'
								m={5}
								transform='scale(2.5)'
								transition='.3s'
								_hover={{
									color,
									transform: "scale(3)",
								}}
							>
								{icon}
							</Box>
						))}
					</Flex>
				</Box>
			))}
		</Section>
	);
};

export default Skills;

