import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Header = () => {
	return (
		<Flex
			as='header'
			minH='400px'
			alignItems='center'
			justifyContent='center'
			wrap='wrap'
			mb={10}
		>
			<Box
				mr='3'
				overflow='hidden'
				borderRadius='10px 0 10px 0'
				h={200}
				w={200}
			>
				<Image
					layout='fixed'
					height={200}
					width={200}
					src='/img/me.jpg'
					alt='me'
				/>
			</Box>

			<Heading className='heading' as='h1' size='2xl'>
				Hi there,
				<br />i am{" "}
				<Box className='heading__bold' as='span' color='brand.700'>
					Stanley C. Ogada
				</Box>
				,
				<br />a{" "}
				<Box className='heading__bold' as='span' color='brand.700'>
					Fullstack Develop
				</Box>
			</Heading>
		</Flex>
	);
};

export default Header;

