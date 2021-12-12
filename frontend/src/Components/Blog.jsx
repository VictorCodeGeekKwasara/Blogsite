import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import TextField from '@mui/material/TextField';

const styles = {
	box: {
		width: '80vw',
		paddingTop: '15vh',
		margin: 'auto',
		card: {
			width: '100%',
			content: {
				margin: 'auto',
				width: '75%',
				textAlign: 'center',
				title: {
					width: '100%',
					margin: 'auto',
				},
			},

			actions: {
				marginLeft: '15%',
			},
		},
	},
};
export default function Blog() {
	const [blog, setBlog] = useState({});
	const [loggedIn, setLoggedIn] = useState(true);
	const [message, setMessage] = useState('');
	const [coments, setComents] = useState('');

	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/blog/${id}`)
			.then((res) => {
				console.log(res.data.blogs);
				setBlog(res.data.blogs);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const handlesubmit = (e) => {
		e.preventDefault();

		// axios
		// 	.post('http://localhost:8000/login', { email, password })
		// 	.then((res) => {
		// 		console.log(res);
		// 		navigate('/', { replace: true });
		// 	})
		// 	.catch((err) => {
		// 		console.log('this one' + err);
		// 		if (err.response) {
		// 			// The request was made and the server responded with a status code
		// 			// that falls out of the range of 2xx
		// 			// console.log(err.response.data);

		// 			setPassError(err.response.data.errors.password);
		// 			setEmailError(err.response.data.errors.email);
		// 			// console.log(err.response.status);
		// 			// console.log(err.response.headers);
		// 		} else if (err.request) {
		// 			// The request was made but no response was received
		// 			// `err.request` is an instance of XMLHttpRequest in the browser and an instance of
		// 			// http.ClientRequest in node.js
		// 			console.log(err.request);
		// 		} else {
		// 			// Something happened in setting up the request that triggered an Err
		// 			console.log('Err', err.message);
		// 		}
		// });
	};
	return (
		<Box sx={styles.box}>
			<Card sx={styles.box.card}>
				<CardMedia
					component='img'
					alt='Blog cover'
					height='140'
					image={blog.img}
				/>
				<CardContent sx={styles.box.card.content}>
					<Typography
						sx={styles.box.card.content.title}
						gutterBottom
						variant='h2'
						component='div'
					>
						{blog.title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{blog.body}
					</Typography>
				</CardContent>
				<CardActions sx={styles.box.card.actions}>
					<Button size='small' endIcon={<ThumbUpOutlinedIcon />}>
						like
					</Button>
					<Button size='small' endIcon={<ChatBubbleOutlineRoundedIcon />}>
						comment
					</Button>
				</CardActions>

				{loggedIn && (
					<Box
						component='form'
						noValidate
						autoComplete='off'
						onSubmit={handlesubmit}
					>
						<TextField
							fullWidth
							label='comment'
							size='small'
							multiline
							message='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<Button size='small' type='submit'>
							Submit
						</Button>
					</Box>
				)}

				{/* loop through comments */}
				<Box>
					<Typography>name says</Typography>
					<Typography>comment body</Typography>
				</Box>
			</Card>
		</Box>
	);
}
