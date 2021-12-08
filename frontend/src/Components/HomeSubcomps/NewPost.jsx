import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from '../../assets/images/anywhere.jpeg';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export default function NewPost() {
	const styles = {
		img: {
			position: 'absolute',
			top: '10vh',
			right: '0px',
			width: '40vw',
			height: '95%',
			zIndex: '-1',
		},

		card: {
			display: 'flex',
			flexDirection: 'column',
			width: '80%',
			height: '80%',
			padding: '20px',
			backgroundColor: 'transparent',
			boxShadow: 5,

			box: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '40vw',
				margin: '40px',
				content: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',

					latest: {
						position: 'absolute',
						left: '47vw',
						top: '35vh',
						transform: 'rotate(320deg)',
					},
				},
			},
		},
	};
	return (
		<>
			{/* 	<CardMedia
					sx={styles.card.media}
					component='img'
					height='140'
					image={img}
					alt='green iguana'
				/> */}

			<img src={img} style={styles.img} alt='' />

			<Card sx={styles.card}>
				<Box sx={styles.card.box}>
					<CardContent sx={styles.card.box.content}>
						<Typography
							gutterBottom
							variant='h3'
							color='text.secondary'
							component='text'
						>
							How to grow yourself, one day at a time.
							<Typography sx={styles.card.box.content.latest}>
								Latest
								<NewReleasesIcon color='warning' fontSize='large' />
							</Typography>
						</Typography>
						<Typography variant='body2' color='#111'>
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
							quos! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Illo blanditiis commodi ratione earum natus! Error temporibus
							repellendus cum voluptatum unde maxime corporis, velit hic?
							Deleniti voluptate veniam, veritatis inventore eveniet molestiae
							dolor ducimus delectus ullam quod sed, id beatae, quam aspernatur
							nihil. Dignissimos minus aliquam beatae alias quos nesciunt
							reiciendis.
						</Typography>
					</CardContent>
					<CardActions>
						<Fab
							variant='extended'
							size='large'
							color='primary'
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
