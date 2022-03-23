import { Container, Typography } from '@mui/material';
import React from 'react';

import NewProfile from '../components/new-profile-page-components/NewProfile';

const NewProfilePage = () => {
	return (
		<Container maxWidth='xl' className='my-12 text-center'>
			<Typography component='h1' variant='h4'>
				New Profile Page
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				Here you may create a new profile, requred to use the rest of the application.
			</Typography>
			<NewProfile />
		</Container>
	);
};

export default NewProfilePage;
