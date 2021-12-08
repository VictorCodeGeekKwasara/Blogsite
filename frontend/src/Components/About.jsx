import { Box } from '@mui/system';
import React from 'react';
import { Typography } from '@mui/material';

const styles = {
	box: {
		paddingTop: '15vh',
		width: '50vw',
		height: '70vh',
		margin: 'auto',
		textAlign: 'center',
		heading: {},
	},
};
export default function About() {
	return (
		<Box sx={styles.box}>
			<Typography m={2} variant='h3'>
				About Author
			</Typography>
			<Typography variant='body1'>
				Hello! my name is Victor Kwasara a freelance web developer and book
				lover. I develop my web applications using the morden web stack
				Javascript , Mongodb , Express , React, Node (MERN) and Material ui . An
				example of my previous work is this blog site where i write articles
				about the books i read and other educational material. I am really
				passionate about education because it empowers and liberates. It is only
				through education that more people from my home country of Zimbabwe can
				liberate themselves irrespective of regime. I first learnt programming
				using Java and web development using java sever pages but i have long
				since fallen in love with the javascript ecosystem. In 2022 would like
				to pursue web 3.0 decentralised app development with react, get a feel
				of the rust ecosystem and webAssembly. I really hope you enjoy the
				material
			</Typography>
		</Box>
	);
}
