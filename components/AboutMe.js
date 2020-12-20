import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Paragraph from "./Paragraph";
import Section from "./Section";
import TextLink from "./TextLink";

const AboutMe = () => {
	return (
		<Section heading='About Me' id='about-me'>
			<Paragraph>
				I’m currently working as a freelance fullstack developer and UI/UX
				designer. I enjoy building web apps using{" "}
				<TextLink
					link='https://nodejs.org/'
					text='Node.js'
					color='teal.400'
					icon='/img/me.jpg'
				/>{" "}
				and <TextLink link='https://reactjs.org/' text='React.js' />. I'm
				also an active student in University of AMIKOM Yogyakarta.
			</Paragraph>

			<Paragraph>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere
				nisi, reiciendis totam officia cum nam quod ratione illo eligendi
				architecto odio placeat sequi rerum possimus at ducimus aperiam
				temporibus?
			</Paragraph>

			<Link href='/doc/resume.pdf' target='blank'>
				<Button colorScheme='blue'>Download My Resume</Button>
			</Link>
		</Section>
	);
};

export default AboutMe;

