import { Box } from '@mui/system';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
const styles = {
	box: {
		marginTop: '15vh',
		width: '80vw',
		height: '80vh',

		paper: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-40%)',
			width: '65vw',
			height: '60vh',
			zIndex: '10',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			borderLeft: '5px solid black',
			borderBottom: '5px solid black',
			frm: {
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				width: '50%',
			},
		},

		dv: {
			position: 'absolute',
			width: '50vw',
			height: '115%',
			backgroundColor: '#00bcd4',
			top: '-10vh',
			left: '60vw',
		},
	},
};
export default function Login() {
	return (
		<Box sx={styles.box}>
			<Paper sx={styles.box.paper} variant='outlined'>
				<Typography variant='h3'>Contact Us </Typography>
				<form style={styles.box.paper.frm}>
					<label htmlFor='name'>
						<Typography variant='h6'>Name</Typography>
					</label>
					<input type='text' name='name' />

					<label htmlFor='password'>
						<Typography variant='h6'>password</Typography>
					</label>
					<input type='password' name='password' />

					<label htmlFor='message'>
						<Typography variant='h6'>message</Typography>
					</label>
					<textarea name='message' rows='10' />
				</form>
			</Paper>

			<div style={styles.box.dv}></div>
		</Box>
	);
}
