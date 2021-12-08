import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './FooterComponents/Copyright';
import Links from './FooterComponents/Links';
import Social from './FooterComponents/Social';
import SvgIcon from '@mui/material/SvgIcon';
import { Grid } from '@mui/material';

const styles = {
	svg: {},
	box: {
		magin: 'auto',
		backgroundColor: 'black',
		height: '50vh',
	},
};

export default function Footer() {
	return (
		<footer style={{ 'margin-top': '25vh' }}>
			<Grid container sx={styles.box}>
				<Grid item sm={12} md={6}>
					<Links />
				</Grid>

				<Grid item sm={12} md={6}>
					<Social />
				</Grid>

				<Grid item sm={12}>
					<Copyright />
				</Grid>
			</Grid>
		</footer>
	);
}
