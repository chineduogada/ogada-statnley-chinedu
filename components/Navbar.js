import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	Button,
	Box,
	VStack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const listItemProps = {
		h: "40px",
		d: "grid",
		placeItems: "center",
		transition: ".5s",
		_hover: {
			bg: "gray.100",
		},
		onClick: () => setTimeout(onClose, 500),
	};

	return (
		<Box
			as='nav'
			p='2'
			opacity='.5'
			transition='.5s'
			_hover={{ opacity: "1" }}
			position='sticky'
			top='0'
			bg='white'
			zIndex='1'
		>
			<Button colorScheme='blue' onClick={onOpen}>
				<FaBars />
			</Button>
			<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay>
					<DrawerContent d='flex' flexDir='column' justifyContent='center'>
						<VStack spacing={4} align='stretch'>
							<Link href='#about-me'>
								<a>
									<Text {...listItemProps}>About me</Text>
								</a>
							</Link>
							<Link href='#projects'>
								<a>
									<Text {...listItemProps}>Projects</Text>
								</a>
							</Link>
							<Link href='#blogs'>
								<a>
									<Text {...listItemProps}>Blogs</Text>
								</a>
							</Link>
							<Link href='#skills'>
								<a>
									<Text {...listItemProps}>Skills</Text>
								</a>
							</Link>
						</VStack>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Box>
	);
};

export default Navbar;

