import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LargeMenu from './NavComponents/LargeMenu';
import ToggleMenu from './NavComponents/ToggleMenu';

const mylinks = ['about', 'contacts', 'suggest', 'login', 'logout'];

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
		<Box sx={{ flexGrow: 1, marginBottom: '40px' }}>
			<AppBar position='static'>
				{state ? (
					<LargeMenu mylinks={mylinks} />
				) : (
					<ToggleMenu mylinks={mylinks} />
				)}
			</AppBar>
		</Box>
	);
}
