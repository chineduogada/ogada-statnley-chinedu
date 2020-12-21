import { Box, Heading } from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import Section from "./Section";
import Link from "./Link";
import truncate from "../utils/truncate";

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
				{blogs.map((blog) => (
					<Box p={1} mb={3} shadow='xs'>
						<Heading as='h4' className='section__heading' fontSize='lg'>
							<Link href='/'>{truncate(blog.title, 35)}</Link>
						</Heading>

						<Paragraph>{blog.date}</Paragraph>
					</Box>
				))}
			</Box>
		</Section>
	);
};

export default Blogs;

