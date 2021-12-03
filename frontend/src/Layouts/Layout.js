import React from 'react';
import Navigation from './Navigation';
import Test from './Test';
import Footer from './Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

export default function Layout({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Navigation />

			{/* <Test></Test> */}
			{children}

			<Footer />
		</ThemeProvider>
	);
}
