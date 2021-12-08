import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
	const styles = {
		card: {
			color: '#ffffff',
			backgroundColor: '#021E64',
			height: '75vh',
			padding: '1.6rem',

			text: {
				lineHeight: '1.6rem',
			},
		},
	};
	return (
		<div>
			<Card sx={styles.card}>
				<CardContent>
					<Typography gutterBottom variant='h3' component='h1'>
						Welcome to VictorNomics
					</Typography>
					<Typography
						sx={styles.card.text}
						gutterBottom
						paragraph
						variant='body2'
					>
						VICTONOMICS IS A SITE WHERE WE EXPLORE THE WORLD AND EXPAND OUR
						MINDS TOGETHER THROUGH READING HERE YOU WILL FIND BOOK REVIEWS BLOGS
						ABOUT COOL SUBJECTS LIKE TECHNOLOGY, SCIENCE AND ECONOMICS
					</Typography>
					<Typography gutterBottom paragraph variant='body2'>
						THE PEOPLE THAT JOIN THE COMMUNITY CAN GET TO COMMENT,SUGGEST TOPICS
						AND UPVOTE TOPICS
					</Typography>
				</CardContent>
				<CardActions>
					<Fab
						variant='extended'
						size='medium'
						color='secondary'
						aria-label='add'
					>
						Join the community
					</Fab>
				</CardActions>
			</Card>
		</div>
	);
}
