import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AddExercise from '../components/contributor-page-components/AddExercise';
import AddProgram from '../components/contributor-page-components/AddProgram';
import AddWorkout from '../components/contributor-page-components/AddWorkout';
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
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			<Typography component='h1' variant='h4'>
				Contributor Page
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				As a contributor, you have the right to add, edit and delete your own exercises,
				workouts and programs.
			</Typography>

			<Box className='mt-6'>
				{/* ADD EXERCISE/WORKOUT/PROGRAM */}
				<Box>
					<Typography component='h2' variant='h5'>
						Add New
					</Typography>

					<AddExercise />
					<AddWorkout />
					<AddProgram />
				</Box>

				{/* EDIT EXERCISE/WORKOUT/PROGRAM */}
				<Box className='mt-6'>
					<Typography component='h2' variant='h5'>
						Add Workout
					</Typography>
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
