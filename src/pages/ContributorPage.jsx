import { Container, Typography } from '@mui/material';
import React from 'react';

import ExerciseFormsList from '../components/contributor-page-components/ExerciseFormsList';
import Navbar from '../components/shared-components/Navbar';

const ContributorPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Contributor Page
				</Typography>
				<ExerciseFormsList />
			</Container>
		</>
	);
};

export default ContributorPage;
