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
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const listItemProps = {
		h: "40px",
		as: "a",
		d: "grid",
		placeItems: "center",
		transition: ".5s",
		_hover: {
			bg: "gray.100",
		},
		onClick: onClose,
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
							<Box href='#about-me' {...listItemProps}>
								<Text align='center'>About me</Text>
							</Box>
							<Box href='#skills' {...listItemProps}>
								<Text align='center'>Skills</Text>
							</Box>
							<Box href='#blogs' {...listItemProps}>
								<Text align='center'>Blogs</Text>
							</Box>
							<Box href='#project' {...listItemProps}>
								<Text align='center'>Projects</Text>
							</Box>
						</VStack>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Box>
	);
};

export default Navbar;

