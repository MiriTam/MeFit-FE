import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const ContributorPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography variant='h1'>Contributor Page</Typography>
			</Container>
		</>
	);
};

export default ContributorPage;
