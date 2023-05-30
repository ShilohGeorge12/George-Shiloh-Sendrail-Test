import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

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
				<App />
			</HelmetProvider>
		</ChakraProvider>
	</React.StrictMode>
);
