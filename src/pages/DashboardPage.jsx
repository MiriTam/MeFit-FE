import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/shared-components/Navbar';

const DashboardPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Dashboard Page
				</Typography>
			</Container>
		</>
	);
};

export default DashboardPage;
