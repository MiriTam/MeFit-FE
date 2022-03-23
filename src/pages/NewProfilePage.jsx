import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import NewProfile from '../components/new-profile-page-components/NewProfile';

const NewProfilePage = () => {
	const { logout } = useAuth0();

	const handleLogout = () => {
		// logout({ returnTo: 'https://mefit-fe.herokuapp.com' });
		logout({ returnTo: 'http://localhost:3000' });
	};

	return (
		<Container maxWidth='xl' className='my-12'>
			<Box className='text-right'>
				<Button color='error' onClick={handleLogout} variant='contained'>
					Logout
				</Button>
			</Box>
			<Box className='mt-8 md:w-2/3 lg:w-1/2 mx-auto'>
				<Typography component='h1' variant='h4'>
					New Profile Page
				</Typography>
				<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
					Here you may create a new profile, requred to use the rest of the application.
				</Typography>
			</Box>
			<NewProfile />
		</Container>
	);
};

export default NewProfilePage;
