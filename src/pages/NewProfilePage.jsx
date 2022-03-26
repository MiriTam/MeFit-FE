import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

import NewProfile from '../components/new-profile-page-components/NewProfile';

const NewProfilePage = () => {
	const { logout } = useAuth0();

	const handleLogout = () => {
		logout({ returnTo: 'https://mefit-fe.herokuapp.com' });
		// logout({ returnTo: 'http://localhost:3000' });
	};

	return (
		<Container maxWidth='xl' className='pt-8 pb-20 overflow-hidden'>
			<Box className='text-right'>
				<Button color='error' variant='contained' onClick={handleLogout}>
					Logout
				</Button>
			</Box>
			<Box className='md:w-2/3 lg:w-1/2 mx-auto mt-8'>
				<Typography component='h1' variant='h4'>
					New Profile Page
				</Typography>
				<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
					Here you may create a new profile, required to use the rest of the application.
				</Typography>
			</Box>
			<NewProfile />
		</Container>
	);
};

export default NewProfilePage;
