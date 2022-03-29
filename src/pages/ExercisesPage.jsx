import { Container, Typography } from '@mui/material';
import React from 'react';

import ExerciseCardList from '../components/exercise-page-components/ExerciseCardList';

const ExercisesPage = () => {
	return (
		<Container maxWidth='xl' className='pt-12 pb-24 text-center overflow-hidden'>
			<Typography component='h1' variant='h4'>
				Exercises Overview
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				This is a list of all exercises, categorized by the target muscle group they affect.
			</Typography>
			<ExerciseCardList />
		</Container>
	);
};

export default ExercisesPage;
