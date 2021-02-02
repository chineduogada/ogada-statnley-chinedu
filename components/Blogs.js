import { Box, Heading } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import truncate from "../utils/truncate";
import Paragraph from "./Paragraph";
import Section from "./Section";
import ButtonLink from "./ButtonLink";

const blogs = [
  {
    title: "Learn JavaScript as a Total Beginner",
    date: "December 10, 2020",
    link:
      "https://chineduogada.medium.com/how-i-do-learn-javascript-efficiently-c87c273d197e?source=your_stories_page-------------------------------------",
    description:
      "Learning efficiently is like learning fast but in a better way, because like it or not only advanced programmers can be able to pick up a new programming language and learn it fast. your main target should be to learn JavaScript(js) the right way to write elegant code more efficiently.",
  },
];

const Blogs = () => {
  return (
    <Section heading="Blogs" id="blogs">
      <Box>
        {blogs.map((blog, index) => (
          <Box key={index} as="article" p={2} mb={3} shadow="xs" rounded="md">
            <header>
              <Heading as="h4" className="section__heading" fontSize="lg">
                {truncate(blog.title, 50)}
              </Heading>
              <Paragraph>{blog.date}</Paragraph>
            </header>

            <Paragraph>{truncate(blog.description, 80)}</Paragraph>

            <Box as="footer" textAlign="right">
              <ButtonLink
                href={blog.link}
                variant="ghost"
                icon={<FaBookOpen />}
              >
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
