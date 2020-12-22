import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	IconButton,
	Box,
	VStack,
	Text,
} from "@chakra-ui/react";
import { CgMenuMotion } from "react-icons/cg";

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
		onClick: () => setTimeout(onClose, 600),
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
			<IconButton
				color='white'
				bg='brand.800'
				onClick={onOpen}
				isRound
				icon={<CgMenuMotion />}
				fontSize='30px'
			/>
			<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay>
					<DrawerContent d='flex' flexDir='column' justifyContent='center'>
						<VStack spacing={4} align='stretch'>
							<a href='/#about-me'>
								<Text {...listItemProps}>About me</Text>
							</a>

							<a href='/#projects'>
								<Text {...listItemProps}>Projects</Text>
							</a>

							<a href='/#education'>
								<Text {...listItemProps}>Education</Text>
							</a>

							<a href='/#blogs'>
								<Text {...listItemProps}>Blogs</Text>
							</a>

							<a href='/#skills'>
								<Text {...listItemProps}>Skills</Text>
							</a>

							<a href='/#contact'>
								<Text {...listItemProps}>Contact</Text>
							</a>
						</VStack>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Box>
	);
};

export default Navbar;

