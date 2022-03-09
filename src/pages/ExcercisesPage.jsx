import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const ExcercisesPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h1'>Excercises Page</Typography>
			</Container>
		</>
	);
};

export default ExcercisesPage;
