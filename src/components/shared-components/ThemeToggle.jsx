import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

const ThemeToggle = ({ colorMode, theme }) => {
	return (
		<Tooltip title='Toggle theme'>
			<IconButton onClick={colorMode.toggleColorMode} color='inherit'>
				{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Tooltip>
	);
};

export default ThemeToggle;
