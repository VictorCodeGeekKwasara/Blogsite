import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
	return (
		<Typography>{`\u00A9 Copyright  ` + new Date().getFullYear()}</Typography>
	);
}

export default function Footer() {
	return (
		<footer>
			<Container>
				<Typography>Victors Blog</Typography>
				<Typography>professorCodeGeek</Typography>
				<Copyright />
			</Container>
		</footer>
	);
}
