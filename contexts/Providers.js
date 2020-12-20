import { ChakraProvider } from "@chakra-ui/react";
import AppContext from "./AppContext";
import theme from "../styles/theme";

const Providers = ({ children }) => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<AppContext.Provider value={{}}>{children}</AppContext.Provider>
		</ChakraProvider>
	);
};

export default Providers;

