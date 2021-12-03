import * as React from 'react';
import { cyan, lightGreen } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => {
	const { href, ...other } = props;
	// Map href (MUI) -> to (react-router)
	return <Link data-testid='custom-link' ref={ref} to={href} {...other} />;
});

LinkBehavior.propTypes = {
	href: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.object,
		PropTypes.string,
	]).isRequired,
};

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: cyan[500],
		},
		secondary: {
			main: lightGreen.A400,
		},
	},

	components: {
		MuiLink: {
			defaultProps: {
				component: LinkBehavior,
			},
		},
		MuiButtonBase: {
			defaultProps: {
				LinkComponent: LinkBehavior,
			},
		},
	},
});

export default theme;
