import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/montserrat";

const theme = extendTheme({
	fonts: {
		heading: `"Poppins", sans-serif;`,
		body: `"Poppins", sans-serif;`,
		secondary: `"Montserrat", sans-serif;`,
	},
	styles: {
		global: {
			body: {
				bg: "#161b22",
				color: "white",
			},
			a: {
				_hover: {
					textDecoration: "none",
				},
			},
			button: {
				height: "auto",
			},
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
