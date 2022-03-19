import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AddExerciseForm from '../components/contributor-page-components/AddExerciseForm';
import AddProgramForm from '../components/contributor-page-components/AddProgramForm';
import AddWorkoutForm from '../components/contributor-page-components/AddWorkoutForm';
import ExerciseFormsList from '../components/contributor-page-components/ExerciseFormsList';
import ProgramFormsList from '../components/contributor-page-components/ProgramFormsList';
import WorkoutFormsList from '../components/contributor-page-components/WorkoutFormsList';
import { isContributor } from '../utils/isRole';

const ContributorPage = () => {
	const { user } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isContributor(user)) navigate('/');
	}, [navigate, user]);

	return (
		<Container maxWidth='xl'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Contributor Page
			</Typography>

			<Box className='mt-2'>
				{/* ADD/EDIT EXERCISES */}
				<Box>
					<Typography component='h2' variant='h5'>
						Edit Exercises
					</Typography>
					<ExerciseFormsList />
					<Typography component='h2' variant='h5'>
						Add Exercises
					</Typography>
					<AddExerciseForm />
				</Box>

				{/* ADD/EDIT WORKOUTS */}
				<Box className='mt-4'>
					<Typography component='h2' variant='h5'>
						Edit Workouts
					</Typography>
					<WorkoutFormsList />
					<Typography component='h2' variant='h5'>
						Add Workouts
					</Typography>
					<AddWorkoutForm />
				</Box>

				{/* ADD/EDIT PROGRAMS */}
				<Box className='mt-4'>
					<Typography component='h2' variant='h5'>
						Edit Programs
					</Typography>
					<ProgramFormsList />
					<Typography component='h2' variant='h5'>
						Add Programs
					</Typography>
					<AddProgramForm />
				</Box>
			</Box>
		</Container>
	);
};

export default ContributorPage;
