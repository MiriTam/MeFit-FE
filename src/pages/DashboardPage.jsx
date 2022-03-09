import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const DashboardPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h1'>Dashboard Page</Typography>
			</Container>
		</>
	);
};

export default DashboardPage;
