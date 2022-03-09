import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const ProgramsPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h1'>Programs Page</Typography>
			</Container>
		</>
	);
};

export default ProgramsPage;
