import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import ProgramForm from '../components/ProgramForm';

const ProgramsPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h3' sx={{mt:3}}>Program Page</Typography>
				<ProgramForm />
			</Container>
		</>
	);
};

export default ProgramsPage;
