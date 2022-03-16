import { Container, Typography } from '@mui/material';
import React from 'react';
import ExerciseList from '../components/exercise-page-components/ExerciseList';
import Navbar from '../components/shared-components/Navbar';

const ExercisesPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl text-center'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Exercises Page
				</Typography>
				<ExerciseList />
			</Container>
		</>
	);
};

export default ExercisesPage;
