import { AdminPanelSettingsOutlined, LogoutOutlined, PersonOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
		console.log('Logged out!');
	};

	return (
		<AppBar position='static' color='primary'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
						MeFit
					</Typography>
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
								<MenuItem key={page.title} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>
										<Link to={page.path}>{page.title}</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						MeFit
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							alignItems: { md: 'center' }
						}}>
						{pages.map(page => (
							<Link to={page.path} key={page.title}>
								<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white' }}>
									{page.title}
								</Button>
							</Link>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<MenuItem sx={{ display: { xs: 'none', md: 'block' } }}>
								Logged in as{' '}
								<Box component={'span'} className='font-semibold'>
									Konsta123
								</Box>
							</MenuItem>
							<Tooltip title='Open dropdown'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
									<Avatar alt='Konstantinos Pascal' src='/static/images/avatar/1.jpg' />
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
							<MenuItem sx={{ display: { md: 'none' } }} key={'User'}>
								<Typography>
									Logged in as{' '}
									<Box component={'span'} className='font-semibold'>
										Konsta123
									</Box>
								</Typography>
							</MenuItem>
							{dropdownOptions.map(option => (
								<MenuItem key={option.title} onClick={handleCloseUserMenu}>
									<Link to={option.path}>
										<Typography textAlign='center'>
											{option.title.includes('Admin') && (
												<AdminPanelSettingsOutlined sx={{ mr: 1 }} />
											)}
											{option.title.includes('Contributor') && (
												<PersonOutlined sx={{ mr: 1 }} />
											)}
											{option.title.includes('Profile') && (
												<PersonOutlined sx={{ mr: 1 }} />
											)}
											{option.title}
										</Typography>
									</Link>
								</MenuItem>
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
