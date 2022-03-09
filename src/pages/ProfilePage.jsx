import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h1'>Profile Page</Typography>
			</Container>
		</>
	);
};

export default ProfilePage;