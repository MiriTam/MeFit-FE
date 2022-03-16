import { Container, Typography } from '@mui/material';
import React from 'react';

import Navbar from '../components/shared-components/Navbar';
import WorkoutList from '../components/workout-page-components/WorkoutList';

const WorkoutsPage = () => {
	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Workouts Page
				</Typography>
				<WorkoutList />
			</Container>
		</>
	);
};

export default WorkoutsPage;
