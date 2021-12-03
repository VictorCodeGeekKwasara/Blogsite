import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from '../../assets/images/grow.jpg';

export default function NewPost() {
	const styles = {
		card: {
			display: 'flex',
			maxWidth: '60%',
			minheight: '50%',

			media: {
				margin: '10px',
				height: '100%',
				maxWidth: '50%',
			},
		},
	};
	return (
		<>
			<Card sx={styles.card}>
				<CardMedia
					sx={styles.card.media}
					component='img'
					height='140'
					image={img}
					alt='green iguana'
				/>
				<Box>
					<CardContent>
						<Typography gutterBottom variant='h3' component='h1'>
							New Blog!!
						</Typography>
						<Typography gutterBottom variant='h5' component='text'>
							How to grow yourself, one day at a time.
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
					<CardActions>
						<Fab
							variant='extended'
							size='large'
							color='secondary'
							aria-label='add'
						>
							Read More
						</Fab>
					</CardActions>
				</Box>
			</Card>
		</>
	);
}
