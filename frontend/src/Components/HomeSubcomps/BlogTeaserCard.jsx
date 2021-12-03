import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

export default function BlogTeaserCard({ title, desc, img, preview }) {
	const styles = {
		card: {
			backgroundColor: '#021E64',
			text: {},
			card: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				backgroundColor: '#ffffff',
				borderRadius: '10px',
				maxHeight: '40vh',
				// overflow: 'hidden',
				text: {},
			},
		},
	};
	return (
		<div>
			<Card sx={styles.card}>
				<CardContent>
					<Typography gutterBottom variant='h4' component='h1'>
						{title}
					</Typography>
					<Typography gutterBottom paragraph variant='body2'>
						{desc}
					</Typography>

					<Card sx={styles.card.card}>
						<CardMedia
							sx={styles.card.media}
							component='img'
							height='140'
							image={img}
							alt='green iguana'
						/>
						<Typography sx={styles.card.text} paragraph variant='body2'>
							{preview}
						</Typography>

						<CardActions></CardActions>
					</Card>
				</CardContent>
			</Card>
		</div>
	);
}
