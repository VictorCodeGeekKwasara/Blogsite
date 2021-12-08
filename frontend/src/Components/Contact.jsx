import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TextField from '@mui/material/TextField';
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
			textAlign: 'center',
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

export default function Contact() {
	const [nameError, setNameError] = useState(false);
	const [messageError, setMessageError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handlesubmit = (e) => {
		setEmailError(false);
		setNameError(false);
		setMessageError(false);
		e.preventDefault();
		console.log('you rock');
	};

	return (
		<Box sx={styles.box}>
			<Paper variant='outlined' sx={styles.box.paper}>
				<Grid
					container
					spacing={2}
					justifyContent='space-around'
					alignItems='center'
				>
					<Grid item sm={12}>
						<Typography variant='h3'>Contact Victor </Typography>
					</Grid>
					<Grid item sm={12} md={4}>
						<Typography variant='h5'>Email</Typography>
						<Box
							component='form'
							noValidate
							autoComplete='off'
							onSubmit={handlesubmit}
						>
							<TextField
								error={nameError}
								label='Name'
								size='small'
								fullWidth
								helperText={nameError ? 'Incorrect entry.' : ''}
								name='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<TextField
								error={emailError}
								label='email'
								size='small'
								fullWidth
								helperText={emailError ? 'Incorrect entry.' : ''}
								name='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								fullWidth
								error={messageError}
								label='message'
								size='small'
								multiline
								message='message'
								helperText={messageError ? 'Incorrect entry.' : ''}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</Box>
					</Grid>
					<Grid item>
						<Typography variant='h5'>Social Media</Typography>
						<Box>
							<FacebookIcon fontSize='large' />
							<InstagramIcon fontSize='large' />
							<TwitterIcon fontSize='large' />
							<WhatsAppIcon fontSize='large' />
						</Box>
					</Grid>
				</Grid>
			</Paper>
			<div style={styles.box.dv}></div>
		</Box>
	);
}
