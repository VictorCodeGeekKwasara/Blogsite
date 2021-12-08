import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button, ButtonGroup } from '@mui/material';

// styles
const NavLinks = (theme) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(1),

	[theme.breakpoints.up('md')]: {
		flexDirection: 'row',
	},
});

const Nav = (theme) => ({
	display: 'flex',
	flexDirection: 'row',
	padding: theme.spacing(2),
	justifyContent: 'center',
	justifyItems: 'space-around',
	backgroundColor: 'black',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
	text: {
		color: 'primary.main',
	},
});

// #330c2f
const styles = {
	list: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		listStyle: 'none',
	},

	listItems: {
		marginRight: '20px',
		textDecoration: 'none',
		color: 'white',
	},
};

export default function LargeMenu(props) {
	const linkItems = props.mylinks.map((link, i) => (
		<Link sx={styles.listItems} href={`/${link}`} key={i}>
			{link.toUpperCase()}
		</Link>
	));
	return (
		<Toolbar sx={Nav}>
			<Typography
				variant='h6'
				component='div'
				sx={{ flexGrow: 1, color: 'primary.main' }}
			>
				professorCodeGeek
			</Typography>
			<Box sx={NavLinks}>{linkItems}</Box>
			<ButtonGroup type='group'>
				<Button variant='outlined'>Login</Button>
				<Button variant='contained'>Join Us</Button>
			</ButtonGroup>
		</Toolbar>
	);
}
