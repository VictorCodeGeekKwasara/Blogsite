import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from '../../assets/images/grow.jpg';
import bks from '../../assets/images/bkspreview.jpeg';
import { CardActionArea } from '@mui/material';

const styles = {
	card: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '70vw',
		height: '90vh',
		m: 2,

		area: {
			width: '80%',
			height: '70%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
};

export default function Title({ topic }) {
	return (
		<>
			<Card sx={styles.card}>
				<CardActionArea sx={styles.card.area}>
					<Typography gutterBottom variant='h3' component='h3'>
						{topic}
					</Typography>
					<CardMedia
						component='img'
						height='140'
						image={bks}
						alt='green iguana'
					/>
					<CardContent>
						<Typography variant='body2' color='text.secondary'>
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
}
