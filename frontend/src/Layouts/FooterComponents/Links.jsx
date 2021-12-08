import React from 'react';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
const mylinks = ['about', 'contacts', 'suggest', 'login', 'logout'];

const styles = {
	box: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'primary.main',
		alignItems: 'center',
		height: '100%',

		link: {
			textDecoration: 'none',
			m: 2,
		},
	},
};
export default function Links() {
	return (
		<Box sx={styles.box}>
			{mylinks.map((link, i) => (
				<Link
					sx={styles.box.link}
					href={`/${link}`}
					key={i}
					color='#000'
					variant='Button'
				>
					{link.toUpperCase()}
				</Link>
			))}
		</Box>
	);
}
