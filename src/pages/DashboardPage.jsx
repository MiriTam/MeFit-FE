import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect } from 'react';

import { useContributorRequests } from '../context/ContributorRequestsContext';
import { useExercises } from '../context/ExercisesContext';
import { usePrograms } from '../context/ProgramsContext';
import { useUsers } from '../context/UsersContext';
import { useWorkouts } from '../context/WorkoutsContext';

const color = blue[500];

const DashboardPage = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { getAndSetExercises } = useExercises();
	const { getAndSetWorkouts } = useWorkouts();
	const { getAndSetPrograms } = usePrograms();
	const { getAndSetUsers } = useUsers();
	const { getAndSetContributorRequests } = useContributorRequests();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			getAndSetExercises(token);
			getAndSetWorkouts(token);
			getAndSetPrograms(token);
			getAndSetUsers(token);
			getAndSetContributorRequests(token);
		})();
	}, [
		getAccessTokenSilently,
		getAndSetWorkouts,
		getAndSetExercises,
		getAndSetPrograms,
		getAndSetContributorRequests,
		getAndSetUsers
	]);

	useEffect(() => {
		(async () => {
			// 1. GET /api/login to check if user exists
			// 2. if false -> set hasProfile to false, redirect to new profile page
			// 3. if true -> redirect to dashboard
			// 4. is on new profile page, POST /api/user and POST /api/profile
		})();
	}, []);

	return (
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			<Typography component='h1' variant='h2' color='text.secondary'>
				Welcome back,{' '}
				<Box component='span' color={color} className='font-semibold '>
					{user?.nickname}
				</Box>
			</Typography>
			<Typography component='h2' variant='h4' sx={{ mt: 4 }}></Typography>
		</Container>
	);
};

export default DashboardPage;
