import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const AdministratorPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h1'>Administrator Page</Typography>
			</Container>
		</>
	);
};

export default AdministratorPage;
