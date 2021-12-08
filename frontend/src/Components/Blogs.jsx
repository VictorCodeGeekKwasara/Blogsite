import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Link } from '@mui/material';
import img from '../assets/images/grow.jpg';
import { Box } from '@mui/system';

const styles = {
	box: {
		width: '80vw',
		paddingTop: '15vh',
		margin: 'auto',

		container: {
			item: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			},
		},
	},
};

const arr = new Array(20).fill(0);

export default function ActionAreaCard() {
	return (
		<Box sx={styles.box}>
			<Grid
				container
				spacing={3}
				justifyContent='space-around'
				alignItems='center'
			>
				{arr.map((_, i) => (
					<Grid
						sx={styles.box.container.item}
						item
						sm={12}
						md={4}
						key={`${i}+salt`}
					>
						<Card>
							<CardActionArea component={Link} href={`/blog/${i}`}>
								<CardMedia
									component='img'
									height='140'
									image={img}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										Lizard
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
