import { Container, Typography } from '@mui/material';
import React from 'react';

import WorkoutList from '../components/workout-page-components/WorkoutList';

const WorkoutsPage = () => {
	return (
		<Container maxWidth='xl' className='my-12'>
			<Typography component='h1' variant='h4'>
				Workouts Overview
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				This is a list of all workouts, categorized by their type.
			</Typography>
			<WorkoutList />
		</Container>
	);
};

export default WorkoutsPage;
