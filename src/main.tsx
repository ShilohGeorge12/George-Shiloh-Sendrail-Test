import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { ContextProvider } from './context/index.tsx';

const theme = extendTheme({
  fonts: {
    gilroy: 'Gilroy, sans-serif',
		poppins: 'Poppins, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<CSSReset />
			<HelmetProvider>
				<ContextProvider>
					<App />
				</ContextProvider>
			</HelmetProvider>
		</ChakraProvider>
	</React.StrictMode>
);
