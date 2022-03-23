import { Container, Typography } from '@mui/material';
import React from 'react';

import EditProfile from '../components/edit-profile-page-components/EditProfile';

const EditProfilePage = () => {
	return (
		<Container maxWidth='xl' className='my-12 text-center'>
			<Typography component='h1' variant='h4'>
				Profile Page
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				Here you may update your profile details.
			</Typography>
			<EditProfile />
		</Container>
	);
};

export default EditProfilePage;
