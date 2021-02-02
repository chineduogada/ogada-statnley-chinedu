import { Flex, Text } from "@chakra-ui/react";
import { SiGmail } from "react-icons/si";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import Section from "./Section";

const data = [
  {
    name: "Gmail",
    link: "mailto:chineduogada@gmail.com",
    icon: <SiGmail />,
    color: "red.500",
  },
  {
    name: "Twitter",
    link: "",
    icon: <FiTwitter />,
    color: "teal.600",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/chineduogada2000/",
    icon: <FiFacebook />,
    color: "blue.700",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/richcode.js/",
    icon: <FiInstagram />,
    color: "gray.600",
  },
  {
    name: "Linkedin",
    link:
      "https://www.linkedin.com/in/stanley-ogada-22527b19a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0UNqbNxSTBa6uufn5HBRkQ%3D%3D",
    icon: <FiLinkedin />,
    color: "blue.400",
  },
  {
    name: "OutlineWhatsApp",
    link: "https://api.whatsapp.com/send?phone=+2348077917051",
    icon: <AiOutlineWhatsApp />,
    color: "green.600",
  },
  {
    name: "OutlinePhone",
    link: "tel:+2348077917051",
    icon: <AiOutlinePhone />,
  },
];

const Contact = () => {
  return (
    <Section heading="Contact" id="contact" textAlign="center">
      <Flex justifyContent="center" flexWrap="wrap">
        {data.map(({ link, name, color, icon }, index) => (
          <Text
            as="a"
						mx={8}
						my={3}
            transition=".15s"
            transform="scale(1.7)"
            href={link}
            key={index}
            color={color}
          >
            {icon}
          </Text>
        ))}
      </Flex>
    </Section>
  );
};

export default Contact;
