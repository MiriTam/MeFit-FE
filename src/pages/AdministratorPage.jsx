import { Container, Typography } from '@mui/material';
import React from 'react';
import Administrator from '../components/admin-page-components/Administrator';
import Navbar from '../components/shared-components/Navbar';

const AdministratorPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Administrator Page
				</Typography>
				<Administrator />
			</Container>
		</>
	);
};

export default AdministratorPage;
