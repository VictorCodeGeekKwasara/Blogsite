import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// styles
const NavLinks = (theme) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(2),

	[theme.breakpoints.up('md')]: {
		backgroundColor: theme.palette.primary.main,
		flexDirection: 'row',
	},
});

const Nav = (theme) => ({
	display: 'flex',
	flexDirection: 'row',
	padding: theme.spacing(2),
	justifyContent: 'center',
	justifyItems: 'space-around',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
		backgroundColor: theme.palette.primary.main,
	},
});

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
	},
};

export default function LargeMenu(props) {
	const linkItems = props.mylinks.map((link, i) => (
		<Link
			sx={styles.listItems}
			href={`/${link}`}
			key={i}
			color='secondary'
			variant='Button'
		>
			{link.toUpperCase()}
		</Link>
	));
	return (
		<Toolbar sx={Nav}>
			<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
				News
			</Typography>
			<Box sx={NavLinks}>{linkItems}</Box>
		</Toolbar>
	);
}
