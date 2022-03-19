import { useAuth0 } from '@auth0/auth0-react';
import {
	AccountCircleOutlined,
	AdminPanelSettingsOutlined,
	DirectionsRunOutlined,
	FitnessCenterOutlined,
	HomeOutlined,
	LibraryBooksOutlined,
	LogoutOutlined,
	Person,
	PostAddOutlined
} from '@mui/icons-material';
import useColorModeContext from '../../context/ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';
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
import getRoleBasedOptions from '../../utils/getRoleBasedOptions';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@emotion/react';

const pages = [
	{ title: 'Dashboard', path: '/dashboard' },
	{ title: 'Excercises', path: '/exercises' },
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
		logout({ returnTo: 'https://mefit-fe.herokuapp.com' });
		// logout({ returnTo: 'http://localhost:3000' });
	};

	const dropdownOptions = [{ title: 'Profile Page', path: '/profile' }];

	if (isAuthenticated) {
		dropdownOptions.push(...getRoleBasedOptions(user));
	}

	return (
		<AppBar position='static' color='primary' sx={{ pt: 1.5, pb: 1.5 }}>
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
									<MenuItem onClick={handleCloseNavMenu} size={''}>
										<Typography>
											{page.title === 'Dashboard' && <HomeOutlined sx={{ mr: 1 }} />}
											{page.title === 'Excercises' && (
												<FitnessCenterOutlined sx={{ mr: 1 }} />
											)}
											{page.title === 'Workouts' && (
												<DirectionsRunOutlined sx={{ mr: 1 }} />
											)}
											{page.title === 'Programs' && (
												<LibraryBooksOutlined sx={{ mr: 1 }} />
											)}
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
								<MenuItem
									onClick={handleCloseNavMenu}
									sx={{ px: 3, py: 1.5, color: 'white' }}>
									<Typography>
										{page.title === 'Dashboard' && <HomeOutlined sx={{ mr: 1.25 }} />}
										{page.title === 'Excercises' && (
											<FitnessCenterOutlined sx={{ mr: 1.25 }} />
										)}
										{page.title === 'Workouts' && (
											<DirectionsRunOutlined sx={{ mr: 1.25 }} />
										)}
										{page.title === 'Programs' && (
											<LibraryBooksOutlined sx={{ mr: 1.25 }} />
										)}
										{page.title}
									</Typography>
								</MenuItem>
							</Link>
						))}
					</Box>
					<Box sx={{ justifySelf: 'flex-end' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Box>
								<Person sx={{ mr: 1.25 }} />
								Logged in as{' '}
								<Box component={'span'} className='font-semibold'>
									{user?.nickname}
								</Box>
							</Box>
							<IconButton onClick={handleOpenUserMenu} sx={{ ml: 1.5 }}>
								<Avatar alt={user?.nickname} />
							</IconButton>
							<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
								{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
							</IconButton>
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
									<MenuItem onClick={handleCloseUserMenu}>
										<Typography textAlign='center'>
											{option.title.includes('Admin') && (
												<AdminPanelSettingsOutlined sx={{ mr: 1.25 }} />
											)}
											{option.title.includes('Contributor') && (
												<PostAddOutlined sx={{ mr: 1.25 }} />
											)}
											{option.title.includes('Profile') && (
												<AccountCircleOutlined sx={{ mr: 1.25 }} />
											)}
											{option.title}
										</Typography>
									</MenuItem>
								</Link>
							))}
							<MenuItem key={'Logout'} onClick={handleLogout}>
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
