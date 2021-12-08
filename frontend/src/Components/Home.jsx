import React, { useState, useRef, useEffect } from 'react';
import { Divider, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewPost from './HomeSubcomps/NewPost';
import About from './HomeSubcomps/About';
import BlogTeaserCard from './HomeSubcomps/BlogTeaserCard';
import img from '../assets/images/grow.jpg';
import discover from '../assets/images/discover.jpeg';
import bgk from '../assets/images/background.png';
import Title from './HomeSubcomps/Title';
import './Home.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const data = [
	{
		title: 'MOST VIEWED BLOG',
		topic: 'Books',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ',
		preview:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis consequatur accusantium modi totam incidunt, soluta, aut, sunt dicta velit laboriosam repudiandae tenetur molestias. Perspiciatis odit optio neque consectetur repellat?',
		img: img,
	},
	{
		title: 'MOST VIEWED BLOG',
		topic: 'Zimbabwe',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ',
		preview:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis consequatur accusantium modi totam incidunt, soluta, aut, sunt dicta velit laboriosam repudiandae tenetur molestias. Perspiciatis odit optio neque consectetur repellat?',
		img: img,
	},
	{
		title: 'MOST VIEWED BLOG',
		topic: 'The future',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ',
		preview:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis consequatur accusantium modi totam incidunt, soluta, aut, sunt dicta velit laboriosam repudiandae tenetur molestias. Perspiciatis odit optio neque consectetur repellat?',
		img: img,
	},
	{
		title: 'MOST VIEWED BLOG',
		topic: 'Mining',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ',
		preview:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis consequatur accusantium modi totam incidunt, soluta, aut, sunt dicta velit laboriosam repudiandae tenetur molestias. Perspiciatis odit optio neque consectetur repellat?',
		img: img,
	},
	{
		title: 'MOST VIEWED BLOG',
		topic: 'Economics',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ',
		preview:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis consequatur accusantium modi totam incidunt, soluta, aut, sunt dicta velit laboriosam repudiandae tenetur molestias. Perspiciatis odit optio neque consectetur repellat?',
		img: img,
	},
	{
		title: 'MOST VIEWED BLOG',
		topic: 'Technology',
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ',
		preview:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis consequatur accusantium modi totam incidunt, soluta, aut, sunt dicta velit laboriosam repudiandae tenetur molestias. Perspiciatis odit optio neque consectetur repellat?',
		img: img,
	},
];
//
const styles = {
	hero: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundImage: `linear-gradient(225deg, #330c2f, rgba(123,40,125,.4)) ,url(${bgk})`,

		backgroundBlendMode: 'multiply',
		backgroundRepeat: 'repeat',
		height: '100vh',
		mt: 5,
	},

	spacer: {
		width: '100vw',
		height: '23vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'end',
		alignItems: 'center',

		text: {},
	},
	about: {
		// backgroundColor: 'pink',
		position: 'relative',
		width: '100vw',
		height: '120vh',
		backgroundImage: `linear-gradient(225deg, #00bcd4, #1bd6c3, #51e2b2, #7feb9e), url(${bgk})`,
		backgroundBlendMode: 'multiply',
		marginTop: 2,
		// backgroundColor: 'primary.main',

		uppertext: {
			position: 'relative',
			top: '20px',
			left: '45vw',
			fontFamily: 'Londrina Outline',
			width: '60vw',
			zIndex: '10',
		},

		lowertext: {
			position: 'relative',
			top: '-25vh',
			left: '20px',
			fontFamily: 'Londrina Outline',
			width: '60vw',
			zIndex: '10',
		},

		image: {
			position: 'relative',
			left: '13vw',
			top: '-17vh',
			borderLeft: '1px solid black',
			borderTop: '1px solid black',
		},
		grid: {
			margin: 'auto',
			width: '90vw',
		},

		lowCards: {
			marginTop: '30vh',
		},
	},

	titleBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundImage: ` linear-gradient(to bottom, #ffffff, #bcbcbc, #7d7d7d, #434343, #101010);`,
		// backgroundColor: 'rgba(0,0,0,.7)',
		height: '100vh',
		box: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'row',
			height: '100vh',

			active: {
				opacity: 1,
				transform: 'scale(1.08)',
			},

			disabled: {
				opacity: 0,
				transition: '1s',
			},
		},
	},
};
export default function Home() {
	const [current, setCurrent] = useState(0);
	const length = data.length - 1;

	const handleLeft = () => {
		current !== 0 ? setCurrent(current - 1) : setCurrent(length);
	};

	const handleRight = () => {
		current !== length ? setCurrent(current + 1) : setCurrent(0);
	};
	return (
		<>
			{/* Hero sectio */}
			<Box sx={styles.hero} xs={12}>
				<NewPost></NewPost>
			</Box>

			{/* spacer */}

			<Box sx={styles.spacer}> </Box>

			{/* About section */}
			<Box sx={styles.about}>
				<Typography component='h1' variant='h1' sx={styles.about.uppertext}>
					Discover and Learn New Stuff Regularly
				</Typography>

				<img style={styles.about.image} src={discover} alt='' />

				<Typography component='h1' variant='h1' sx={styles.about.lowertext}>
					Reading Is The Next Best Thing To Travel and Experience
				</Typography>
			</Box>

			<Box sx={styles.spacer}>
				<Typography sx={styles.spacer.text} variant='h2' component='h3'>
					Topics
				</Typography>
			</Box>
			{/* titles/topics section horizontal scroll */}
			<Box sx={styles.titleBox}>
				<Button className='prev' onClick={handleLeft}>
					<ChevronLeftIcon fontSize='large' />
				</Button>
				<Box sx={styles.titleBox.box}>
					{data.map((title, index) => (
						<div className={index === current ? 'slide active' : 'slide'}>
							{index === current && (
								<Title sx={styles.titleBox.box} topic={title.topic} />
							)}
						</div>
					))}
				</Box>

				<Button className='next' onClick={handleRight}>
					<ChevronRightIcon fontSize='large' />
				</Button>
			</Box>
		</>
	);
}
