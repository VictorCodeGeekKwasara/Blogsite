import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

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

export default function ActionAreaCard() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8000/blogs')
			.then((res) => {
				console.log(res.data);
				setBlogs(res.data.blogs);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<Box sx={styles.box}>
			<Grid
				container
				spacing={3}
				justifyContent='space-around'
				alignItems='center'
			>
				{blogs.length > 0 &&
					blogs.map((blog, i) => (
						<Grid
							sx={styles.box.container.item}
							item
							sm={12}
							md={4}
							key={`${i}+salt+${blog.id}`}
						>
							<Card>
								<CardActionArea component={Link} href={`/blog/${blog._id}`}>
									<CardMedia
										component='img'
										height='140'
										image={blog.img}
										alt='green iguana'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5' component='div'>
											{blog.topic}
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											{blog.preview}
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
