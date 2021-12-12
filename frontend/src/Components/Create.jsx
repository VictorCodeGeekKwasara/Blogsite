import { Box } from '@mui/system';
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

export default function Joinus() {
	const [passError, setPassError] = useState('');
	const [emailError, setEmailError] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	let navigate = useNavigate();

	const handlesubmit = (e) => {
		e.preventDefault();
		setEmailError('');
		setPassError('');
		axios
			.post('http://localhost:8000/login', { email, password })
			.then((res) => {
				console.log(res);
				navigate('/', { replace: true });
			})
			.catch((err) => {
				console.log('this one' + err);
				if (err.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					// console.log(err.response.data);

					setPassError(err.response.data.errors.password);
					setEmailError(err.response.data.errors.email);
					// console.log(err.response.status);
					// console.log(err.response.headers);
				} else if (err.request) {
					// The request was made but no response was received
					// `err.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(err.request);
				} else {
					// Something happened in setting up the request that triggered an Err
					console.log('Err', err.message);
				}
			});
	};
	return (
		<Box sx={styles.box}>
			<Paper sx={styles.box.paper} variant='outlined'>
				<Typography variant='h4'>Log In</Typography>
				<Box
					component='form'
					style={styles.box.paper.box}
					noValidate
					autoComplete='off'
					onSubmit={handlesubmit}
				>
					<TextField
						sx={styles.box.paper.box.tfields}
						error={emailError !== ''}
						label='email'
						size='small'
						fullWidth
						helperText={emailError}
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						fullWidth
						sx={styles.box.paper.box.tfields}
						error={passError !== ''}
						label='password'
						type='message'
						name='password'
						size='small'
						helperText={passError}
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
