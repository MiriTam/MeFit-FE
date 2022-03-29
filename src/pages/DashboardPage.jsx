import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect, useRef, useState } from 'react';

import DashboardCurrentGoal from '../components/dashboard-page-components/DashboardCurrentGoal';
import { useContributorRequests } from '../context/ContributorRequestsContext';
import { useExercises } from '../context/ExercisesContext';
import { usePrograms } from '../context/ProgramsContext';
import { useUsers } from '../context/UsersContext';
import { useWorkouts } from '../context/WorkoutsContext';
import { useCurrentUser } from '../context/CurrentUserContext';
import { isAdministrator } from '../utils/isRole';
import ProgressBar from '../components/dashboard-page-components/progress-bar';
import GoalsDisplay from '../components/dashboard-page-components/goals-display';

const color = blue[500];

const DashboardPage = () => {
	const [madeInitialRequests, setMadeInitialRequests] = useState(false);
	const mountedRef = useRef(true);

	const { user, getAccessTokenSilently } = useAuth0();
	const { getAndSetExercises } = useExercises();
	const { getAndSetWorkouts } = useWorkouts();
	const { getAndSetPrograms } = usePrograms();
	const { getAndSetUsers } = useUsers();
	const { getAndSetContributorRequests } = useContributorRequests();
	const { getCurrentUserFromApi } = useCurrentUser();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			if (!madeInitialRequests) {
				getAndSetExercises(token);
				getAndSetWorkouts(token);
				getAndSetPrograms(token);
				getCurrentUserFromApi(token);

				if (user && isAdministrator(user)) {
					getAndSetUsers(token);
					getAndSetContributorRequests(token);
				}

				if (mountedRef.current) setMadeInitialRequests(true);
			}
		})();
	}, [
		getAccessTokenSilently,
		getAndSetWorkouts,
		getAndSetExercises,
		getAndSetPrograms,
		getAndSetContributorRequests,
		getAndSetUsers,
		getCurrentUserFromApi,
		madeInitialRequests,
		user
	]);

	useEffect(() => {
		return () => {
			mountedRef.current = false;
		};
	}, []);

	return (
		<Container maxWidth='xl' className='pt-12 pb-24 text-center overflow-hidden'>
			<Typography component='h1' variant='h3' color='text.secondary' align='left'>
				Welcome back,{' '}
				<Box component='span' color={color} className='font-semibold '>
					{user?.nickname}
				</Box>
			</Typography>
			<DashboardCurrentGoal />
			<Typography component='h2' variant='h4' sx={{ mt: 4 }}>Your Current Goal:</Typography>
			<GoalsDisplay></GoalsDisplay>
		</Container>
	);
};

export default DashboardPage;
