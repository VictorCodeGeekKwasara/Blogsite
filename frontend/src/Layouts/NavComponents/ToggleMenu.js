import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link, MenuItem } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function ToggleMenu(props) {
	const [state, setState] = useState(false);

	const linkItemsMobile = props.mylinks.map((link, i) => (
		<>
			<MenuItem
				component={Link}
				key={i}
				href={`/${link}`}
				color='secondary'
				variant='Button'
			>
				{link.toUpperCase()}
			</MenuItem>
			{i === 2 ? <Divider /> : ''}
		</>
	));

	const handleToggleMenuOpen = () => {
		setState(!state);
	};
	const handleToggleMenuClose = () => {
		setState(!state);
	};
	return (
		<Toolbar>
			<IconButton
				onClick={handleToggleMenuOpen}
				size='large'
				edge='start'
				color='inherit'
				aria-label='menu'
				sx={{ mr: 2 }}
			>
				<MenuIcon />
			</IconButton>

			<SwipeableDrawer
				anchor='bottom'
				open={state}
				onClose={handleToggleMenuClose}
			>
				<Box sx={{ width: 'auto' }} role='presentation'>
					{linkItemsMobile}
				</Box>
			</SwipeableDrawer>
		</Toolbar>
	);
}
