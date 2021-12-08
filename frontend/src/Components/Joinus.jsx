import { Box } from '@mui/system';
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
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
			box: {
				width: '50ch',

				tfields: {
					marginTop: '20px',
				},

				btn: {
					position: 'relative',
					top: '10%',
					left: '50%',
					transform: 'translateX(-50%)',
				},
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
	const [nameError, setNameError] = useState(false);
	const [passError, setPassError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlesubmit = (e) => {
		setEmailError(false);
		setNameError(false);
		setPassError(false);
		e.preventDefault();
		console.log('you rock');
	};
	return (
		<Box sx={styles.box}>
			<Paper sx={styles.box.paper} variant='outlined'>
				<Typography variant='h4'>Join Us</Typography>
				<Box
					component='form'
					style={styles.box.paper.box}
					noValidate
					autoComplete='off'
					onSubmit={handlesubmit}
				>
					<TextField
						sx={styles.box.paper.box.tfields}
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
						sx={styles.box.paper.box.tfields}
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
						sx={styles.box.paper.box.tfields}
						error={passError}
						label='password'
						size='small'
						password='password'
						helperText={passError ? 'Incorrect entry.' : ''}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Button
						sx={styles.box.paper.box.btn}
						variant='contained'
						type='submit'
					>
						Submit
					</Button>
				</Box>
			</Paper>

			<div style={styles.box.dv}></div>
		</Box>
	);
}
