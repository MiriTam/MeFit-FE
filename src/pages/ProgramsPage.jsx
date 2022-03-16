import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/shared-components/Navbar';
import ProgramList from '../components/programs-page-components/ProgramList';

const ProgramsPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Programs Page
				</Typography>
				<ProgramList />
			</Container>
		</>
	);
};

export default ProgramsPage;
