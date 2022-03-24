import WorkoutCardList from '../components/workout-page-components/WorkoutCardList';
import { Container, Typography } from '@mui/material';
import React from 'react';

const WorkoutsPage = () => {
	return (
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			<Typography component='h1' variant='h4'>
				Workouts Overview
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				This is a list of all workouts, categorized by their type.
			</Typography>
			<WorkoutCardList />
		</Container>
	);
};

export default WorkoutsPage;
