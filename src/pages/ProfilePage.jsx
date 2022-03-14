import { Container, Typography } from '@mui/material';
import React from 'react';

import ProfileForm from '../components/profile-page-components/ProfileForm';
import Navbar from '../components/shared-components/Navbar';

const ProfilePage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl' className='text-center'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Profile Page
				</Typography>
				<ProfileForm />
			</Container>
		</>
	);
};

export default ProfilePage;
