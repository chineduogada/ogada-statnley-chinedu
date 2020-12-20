import Providers from "../contexts/Providers";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	);
}

export default MyApp;

