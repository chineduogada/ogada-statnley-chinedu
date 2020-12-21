import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box maxW='768px' mx='auto' p={2}>
				<Navbar />
				<Header />
				<Main />
				<Footer />
			</Box>
		</>
	);
}

