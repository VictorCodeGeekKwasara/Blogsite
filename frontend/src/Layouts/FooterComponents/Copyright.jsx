import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const styles = {
	box: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'black',
		color: 'white',
		alignItems: 'center',
		borderTop: '2px solid black',
		height: '100%',
		marginTop: '0px',
	},
};

export default function Copyright() {
	return (
		<Box sx={styles.box}>
			<Typography>professorCodeGeek</Typography>
			<Typography>{`\u00A9 Copyright  ` + new Date().getFullYear()}</Typography>
		</Box>
	);
}
