import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AddExerciseForm from '../components/contributor-page-components/AddExercise';
import AddProgramForm from '../components/contributor-page-components/AddProgram';
import AddWorkout from '../components/contributor-page-components/AddWorkout';
import EditExerciseList from '../components/contributor-page-components/EditExerciseList';
import EditProgramList from '../components/contributor-page-components/EditProgramList';
import EditWorkoutList from '../components/contributor-page-components/EditWorkoutList';
import { isContributor } from '../utils/isRole';

const ContributorPage = () => {
	const { user, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated && !isContributor(user)) navigate('/');
	}, [navigate, user, isAuthenticated]);

	return (
		<Container maxWidth='xl'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Contributor Page
			</Typography>

			<Box className='mt-6'>
				{/* ADD/EDIT EXERCISES */}
				<Box>
					<Typography component='h2' variant='h5'>
						Add Exercise
					</Typography>
					<AddExerciseForm />
					<Typography component='h2' variant='h5'>
						Edit Exercises
					</Typography>
					<EditExerciseList />
				</Box>

				{/* ADD/EDIT WORKOUTS */}
				<Box className='mt-6'>
					<Typography component='h2' variant='h5'>
						Add Workout
					</Typography>
					<AddWorkout />
					<Typography component='h2' variant='h5'>
						Edit Workouts
					</Typography>
					<EditWorkoutList />
				</Box>

				{/* ADD/EDIT PROGRAMS */}
				<Box className='mt-6'>
					<Typography component='h2' variant='h5'>
						Add Program
					</Typography>
					<AddProgramForm />
					<Typography component='h2' variant='h5'>
						Edit Programs
					</Typography>
					<EditProgramList />
				</Box>
			</Box>
		</Container>
	);
};

export default ContributorPage;
