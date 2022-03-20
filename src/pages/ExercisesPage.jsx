import { Container, Typography } from '@mui/material';
import React from 'react';

import ExerciseCardList from '../components/exercise-page-components/ExerciseCardList';

const ExercisesPage = () => {
	return (
		<Container maxWidth='xl' className='text-left'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Exercises Page
			</Typography>
			<ExerciseCardList />
		</Container>
	);
};

export default ExercisesPage;
