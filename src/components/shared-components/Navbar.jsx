import {
	AccountCircleOutlined,
	AdminPanelSettingsOutlined,
	DirectionsRunOutlined,
	FitnessCenterOutlined,
	HomeOutlined,
	LibraryBooksOutlined,
	LogoutOutlined,
	Person,
	PostAddOutlined,
	RowingOutlined
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useUser from '../../context/UserContext';

const pages = [
	{ title: 'Dashboard', path: '/dashboard' },
	{ title: 'Excercises', path: '/excercises' },
	{ title: 'Programs', path: '/programs' },
	{ title: 'Workouts', path: '/workouts' }
];
const dropdownOptions = [
	{ title: 'Contributor Page', path: '/contributor' },
	{ title: 'Administrator Page', path: '/administrator' },
	{ title: 'Profile Page', path: '/profile' }
];

const Navbar = () => {
	const { username, logout, login } = useUser();

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
		login({ id: 22, username: 'TamTam' });
		logout();
	};

	return (
		<AppBar position='static' color='primary'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
								display: { xs: 'block', md: 'none' }
							}}>
							{pages.map(page => (
								<Link to={page.path}>
									<MenuItem key={page.title} onClick={handleCloseNavMenu}>
										<Typography>
											{page.title.includes('Dashboard') && (
												<HomeOutlined sx={{ mr: 1 }} />
											)}
											{page.title.includes('Excercises') && (
												<FitnessCenterOutlined sx={{ mr: 1 }} />
											)}
											{page.title.includes('Programs') && (
												<LibraryBooksOutlined sx={{ mr: 1 }} />
											)}
											{page.title.includes('Workout') && (
												<RowingOutlined sx={{ mr: 1 }} />
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
							display: { xs: 'none', md: 'flex' },
							alignItems: { md: 'center' }
						}}>
						{pages.map(page => (
							<Link to={page.path}>
								<MenuItem
									key={page.title}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white' }}>
									<Typography>
										{page.title.includes('Dashboard') && <HomeOutlined sx={{ mr: 1 }} />}
										{page.title.includes('Excercises') && (
											<FitnessCenterOutlined sx={{ mr: 1 }} />
										)}
										{page.title.includes('Programs') && (
											<LibraryBooksOutlined sx={{ mr: 1 }} />
										)}
										{page.title.includes('Workout') && (
											<DirectionsRunOutlined sx={{ mr: 1 }} />
										)}
										{page.title}
									</Typography>
								</MenuItem>
							</Link>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Box>
								<Person sx={{ mr: 1 }} />
								Logged in as{' '}
								<Box component={'span'} className='font-semibold'>
									{username}
								</Box>
							</Box>
							<Tooltip title='Open dropdown'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
									<Avatar alt={username} src='/static/images/avatar/1.jpg' />
								</IconButton>
							</Tooltip>
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
								<Link to={option.path}>
									<MenuItem key={option.title} onClick={handleCloseUserMenu}>
										<Typography textAlign='center'>
											{option.title.includes('Admin') && (
												<AdminPanelSettingsOutlined sx={{ mr: 1 }} />
											)}
											{option.title.includes('Contributor') && (
												<PostAddOutlined sx={{ mr: 1 }} />
											)}
											{option.title.includes('Profile') && (
												<AccountCircleOutlined sx={{ mr: 1 }} />
											)}
											{option.title}
										</Typography>
									</MenuItem>
								</Link>
							))}
							<MenuItem key={'Logout'} onClick={handleLogout}>
								<Typography textAlign='center' color={'red'}>
									<LogoutOutlined sx={{ mr: 1 }} />
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
