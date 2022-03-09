import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const WorkoutsPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h1'>Workouts Page</Typography>
			</Container>
		</>
	);
};

export default WorkoutsPage;
