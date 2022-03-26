import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from '@emotion/react';
import { LogoutOutlined, Person } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useColorModeContext from '../../context/ThemeContext';
import getIconBasedOnTitle from '../../utils/getIconBasedOnTitle';
import getOptionsBasedOnRole from '../../utils/getOptionsBasedOnRole';
import ThemeToggle from './ThemeToggle';

const pages = [
	{ title: 'Dashboard', path: '/dashboard' },
	{ title: 'Goals', path: '/goals' },
	{ title: 'Exercises', path: '/exercises' },
	{ title: 'Workouts', path: '/workouts' },
	{ title: 'Programs', path: '/programs' }
];

const Navbar = () => {
	const colorMode = useColorModeContext();
	const theme = useTheme();

	const { user, logout, isAuthenticated } = useAuth0();

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		handleCloseUserMenu(null);
		// logout({ returnTo: 'https://mefit-fe.herokuapp.com' });
		logout({ returnTo: 'http://localhost:3000' });
	};

	const dropdownOptions = [
		{ title: 'Profile Page', path: '/edit-profile' },
		...getOptionsBasedOnRole(user, isAuthenticated)
	];

	return (
		<AppBar
			className='overflow-hidden'
			position='static'
			color='primary'
			sx={{ pt: 1.5, pb: 1.5 }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left'
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', lg: 'none' }
							}}>
							{pages.map(page => (
								<Link to={page.path} key={page.title}>
									<MenuItem sx={{ px: 3, py: 1 }} onClick={handleCloseNavMenu}>
										<Typography>
											{getIconBasedOnTitle(page.title)}
											{page.title}
										</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', lg: 'flex' },
							alignItems: { lg: 'center' }
						}}>
						{pages.map(page => (
							<Link to={page.path} key={page.title}>
								<MenuItem onClick={handleCloseNavMenu} sx={{ px: 3, py: 1.5 }}>
									<Typography>
										{getIconBasedOnTitle(page.title)}
										{page.title}
									</Typography>
								</MenuItem>
							</Link>
						))}
					</Box>
					<Box sx={{ justifySelf: 'flex-end' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Box className='text-right'>
								<Person sx={{ mr: 1.25 }} />
								Logged in as{' '}
								<Box component={'span'} className='font-semibold'>
									{user?.nickname}
								</Box>
							</Box>
							<Tooltip title='Show dropdown'>
								<IconButton onClick={handleOpenUserMenu} sx={{ ml: 1.5 }}>
									<Avatar alt={user?.nickname} />
								</IconButton>
							</Tooltip>
							<ThemeToggle colorMode={colorMode} theme={theme} />
						</Box>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{dropdownOptions.map(option => (
								<Link to={option.path} key={option.title}>
									<MenuItem sx={{ px: 3, py: 1 }} onClick={handleCloseUserMenu}>
										<Typography textAlign='center'>
											{getIconBasedOnTitle(option.title)}
											{option.title}
										</Typography>
									</MenuItem>
								</Link>
							))}
							<MenuItem sx={{ px: 3, py: 1 }} key={'Logout'} onClick={handleLogout}>
								<Typography textAlign='center' color={'red'}>
									<LogoutOutlined sx={{ mr: 1.25 }} />
									Logout
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
