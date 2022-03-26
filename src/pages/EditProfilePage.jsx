import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import EditProfile from '../components/edit-profile-page-components/EditProfile';

const EditProfilePage = () => {
	return (
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			<Box className='md:w-2/3 lg:w-1/2 mx-auto'>
				<Typography component='h1' variant='h4'>
					Profile Page
				</Typography>
				<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
					Here you may update your profile details.
				</Typography>
			</Box>
			<EditProfile />
		</Container>
	);
};

export default EditProfilePage;
