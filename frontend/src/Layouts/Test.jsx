import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Box } from '@mui/system';

const data = {
	description: 'A list of fruits.',
	fruits: [
		'apple',
		'apricot',
		'avocado',
		'banana',
		'bell pepper',
		'bilberry',
		'blackberry',
		'blackcurrant',
		'coconut',
		'cranberry',
		'cucumber',
		'currant',
		'damson',
		'date',
		'dragonfruit',
		'durian',
		'eggplant',
		'elderberry',
		'feijoa',
		'fig',
		'goji berry',
		'gooseberry',
		'grape',
		'grapefruit',
		'guava',
		'honeydew',
		'huckleberry',
		'jackfruit',
		'jambul',
		'jujube',
		'kiwi fruit',
		'kumquat',
		'lemon',
		'lime',
		'loquat',
		'lychee',
		'mandarine',
		'mango',
		'mulberry',
		'nectarine',
		'nut',
		'olive',
		'orange',
	],
};

const styles = {
	box: {
		display: 'flex',

		list: {
			display: 'flex',
			overflowX: 'scroll',
			listStyle: 'none',
			alignItems: 'center',
			maxWidth: '100%',
			scrollBehavior: 'smooth',
			'::-webkit-scrollbar': {
				background: 'transparent',
				'-webkit-appearance': 'none',
				width: 0,
				height: 0,
			},
		},
	},
};

export default function Test() {
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

	return (
		<Box sx={styles.box}>
			{scrollX !== 0 && (
				<Button className='prev' onClick={() => slide(-50)}>
					<ChevronLeftIcon fontSize='large' />
				</Button>
			)}

			<ul ref={scrl} onScroll={scrollCheck} style={styles.box.list}>
				{data.fruits.map((fruit, i) => (
					<li key={i}>{fruit}</li>
				))}
			</ul>

			{!scrolEnd && (
				<Button className='next' onClick={() => slide(50)}>
					<ChevronRightIcon fontSize='large' />
				</Button>
			)}
		</Box>
	);
}
