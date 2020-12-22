import { Box, Heading } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import truncate from "../utils/truncate";
import Paragraph from "./Paragraph";
import Section from "./Section";
import ButtonLink from "./ButtonLink";

const blogs = [
	{
		title: "Learning JavaScript efficiently hedf dsfd fdf df df df df df",
		date: "november 10, 2020",
	},
	{ title: "Learning JavaScript efficiently", date: "november 10, 2020" },
	{ title: "Learning JavaScript efficiently", date: "november 10, 2020" },
	{ title: "Learning JavaScript efficiently", date: "november 10, 2020" },
];

const Blogs = () => {
	return (
		<Section heading='Blogs' id='blogs'>
			<Box>
				{blogs.map((blog, index) => (
					<Box
						key={index}
						as='article'
						p={2}
						mb={3}
						shadow='xs'
						rounded='md'
					>
						<header>
							<Heading
								as='h4'
								className='section__heading'
								fontSize='lg'
							>
								{truncate(blog.title, 50)}
							</Heading>
							<Paragraph>{blog.date}</Paragraph>
						</header>

						<Box as='footer' textAlign='right'>
							<ButtonLink href='/' variant='ghost' icon={<FaBookOpen />}>
								read
							</ButtonLink>
						</Box>
					</Box>
				))}
			</Box>
		</Section>
	);
};

export default Blogs;

