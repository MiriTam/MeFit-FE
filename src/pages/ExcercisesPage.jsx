import { Container, Typography } from '@mui/material';
import React from 'react';
import ExerciseList from '../components/exercise-page-components/ExerciseList';
import Navbar from '../components/shared-components/Navbar';

const ExcercisesPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Excercises Page
				</Typography>
				<ExerciseList />
			</Container>
		</>
	);
};

export default ExcercisesPage;
