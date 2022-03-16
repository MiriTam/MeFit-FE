import { Container, Typography } from '@mui/material';
import React from 'react';

import ExerciseCardsList from '../components/exercise-page-components/ExerciseCardsList';

const ExercisesPage = () => {
	return (
		<Container maxWidth='xl' className='text-left'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Exercises Page
			</Typography>
			<ExerciseCardsList />
		</Container>
	);
};

export default ExercisesPage;
