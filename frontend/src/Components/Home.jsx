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
import Title from './HomeSubcomps/Title';
import './Home.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const data = {
	title: 'MOST VIEWED BLOG',
	desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ',
	preview:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis consequatur accusantium modi totam incidunt, soluta, aut, sunt dicta velit laboriosam repudiandae tenetur molestias. Perspiciatis odit optio neque consectetur repellat?',
	img: img,
};
export default function Home() {
	const [scrollX, setscrollX] = useState(0);

	const [scrolEnd, setscrolEnd] = useState(false);

	const scrl = useRef(null);

	useEffect(() => {
		if (
			scrl.current &&
			scrl?.current?.scrllWidth === scrl?.current?.offsetWidth
		) {
			setscrolEnd(true);
		} else {
			setscrolEnd(false);
		}
	}, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

	const slide = (shift) => {
		scrl.current.scrollLeft += shift;

		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
			scrl.current.offsetWidth
		) {
			setscrolEnd(true);
		} else {
			setscrolEnd(false);
		}
	};

	const scrollCheck = () => {
		setscrollX(scrl.current.scrollLeft);

		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
			scrl.current.offsetWidth
		) {
			setscrolEnd(true);
		} else {
			setscrolEnd(false);
		}
	};

	const styles = {
		hero: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			// backgroundColor: 'red',
			height: '100vh',
		},
		about: {
			// backgroundColor: 'pink',
			width: '100vw',
			height: '100vh',
			backgroundColor: 'primary.main',

			grid: {
				margin: 'auto',
				width: '90vw',
			},

			lowCards: {
				marginTop: '30vh',
			},
		},

		title: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			// backgroundColor: 'purple',
			padding: '100px',
			overflowX: 'hidden',
			height: '100vh',
		},
	};

	return (
		<>
			{/* Hero sectio */}
			<Box sx={styles.hero} item xs={12}>
				<NewPost></NewPost>
			</Box>

			{/* About section */}
			<Box sx={styles.about}>
				<Grid sx={styles.about.grid} container spacing={2}>
					<Grid item xs={12} md={4}>
						<Box sx={styles.about.lowCards}>
							<BlogTeaserCard
								desc={data.desc}
								title={data.title}
								img={data.img}
								preview={data.preview}
							/>
						</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<About></About>
					</Grid>

					<Grid sx={styles.about.lowCards} item xs={12} md={4}>
						<BlogTeaserCard
							desc={data.desc}
							title={data.title}
							img={data.img}
							preview={data.preview}
						/>
					</Grid>
				</Grid>
			</Box>

			{/* titles/topics section horizontal scroll */}
			<Box sx={styles.title}>
				{scrollX !== 0 && (
					<Button className='prev' onClick={() => slide(-50)}>
						<ChevronLeftIcon fontSize='large' />
					</Button>
				)}

				<ul className='titleList' ref={scrl} onScroll={scrollCheck}>
					{['one', 'Two', 'three', 'four', 'five'].map((topic, i) => (
						<li className='lst' key={`${i}${new Date().toString()}`}>
							<Title topic={topic} />
						</li>
					))}
				</ul>
				{!scrolEnd && (
					<Button className='next' onClick={() => slide(50)}>
						<ChevronRightIcon fontSize='large' />
					</Button>
				)}
			</Box>
		</>
	);
}
