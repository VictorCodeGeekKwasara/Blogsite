import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const styles = {
	outerBox: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		height: '100%',

		innerbox: {
			m: 2,
			display: 'flex',
			flexDirection: 'column',
		},
	},
};
export default function Social() {
	return (
		<Box sx={styles.outerBox}>
			<Typography>Lets connect on social media</Typography>

			<Box sx={styles.outerBox.innerbox}>
				<FacebookIcon fontSize='large' />
				<InstagramIcon fontSize='large' />
				<TwitterIcon fontSize='large' />
				<WhatsAppIcon fontSize='large' />
			</Box>
		</Box>
	);
}
