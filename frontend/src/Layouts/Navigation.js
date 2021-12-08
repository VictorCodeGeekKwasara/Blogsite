import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LargeMenu from './NavComponents/LargeMenu';
import ToggleMenu from './NavComponents/ToggleMenu';

const mylinks = ['home', 'blogs', 'suggest', 'about', 'contact'];

const styles = {
	box: {
		flexGrow: 1,
		borderBottom: '3px solid black',
	},
};

export default function ButtonAppBar() {
	const [state, setState] = useState(false);

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900 ? setState(false) : setState(true);
		};

		setResponsiveness();

		window.addEventListener('resize', () => setResponsiveness());
	}, []);

	return (
		<Box sx={styles.box}>
			<AppBar position='fixed'>
				{state ? (
					<LargeMenu mylinks={mylinks} />
				) : (
					<ToggleMenu mylinks={mylinks} />
				)}
			</AppBar>
		</Box>
	);
}
