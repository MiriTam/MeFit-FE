import { Container, Typography } from '@mui/material';
import React from 'react';

import EditProfile from '../components/profile-page-components/EditProfile';

const ProfilePage = () => {
	return (
		<Container maxWidth='xl' className='text-center'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Profile Page
			</Typography>
			<EditProfile />
		</Container>
	);
};

export default ProfilePage;
