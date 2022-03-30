import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect, useRef, useState } from 'react';

import { getGoalById } from '../api/goals';
import DashboardCurrentGoal from '../components/dashboard-page-components/DashboardCurrentGoal';
import DashboardSetGoal from '../components/dashboard-page-components/DashboardSetGoal';
import { useContributorRequests } from '../context/ContributorRequestsContext';
import { useCurrentUser } from '../context/CurrentUserContext';
import { useExercises } from '../context/ExercisesContext';
import { usePrograms } from '../context/ProgramsContext';
import { useUsers } from '../context/UsersContext';
import { useWorkouts } from '../context/WorkoutsContext';
import getProgramById from '../utils/getProgramById';
import { isAdministrator, isContributor } from '../utils/isRole';
import GoalsDisplay from '../components/dashboard-page-components/goals-display';

const color = blue[500];

const DashboardPage = () => {
	const [madeInitialRequests, setMadeInitialRequests] = useState(false);
	const [madeInitialRequests2, setMadeInitialRequests2] = useState(false);
	const [madeInitialRequests3, setMadeInitialRequests3] = useState(false);

	const mountedRef = useRef(true);
	const mountedRef2 = useRef(true);
	const mountedRef3 = useRef(true);

	const { user, getAccessTokenSilently } = useAuth0();
	const { getAndSetExercises, getAndSetContributorExercises } = useExercises();
	const { getAndSetWorkouts, getAndSetContributorWorkouts } = useWorkouts();
	const { getAndSetPrograms, getAndSetContributorPrograms, programs } = usePrograms();
	const { getAndSetUsers } = useUsers();
	const { currentUser, getAndSetCurrentUser, getAndSetProfile } = useCurrentUser();
	const { getAndSetContributorRequests } = useContributorRequests();

	// Common requests across all roles
	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			if (!madeInitialRequests) {
				getAndSetExercises(token);
				getAndSetWorkouts(token);
				getAndSetPrograms(token);
				getAndSetCurrentUser(token);
				getAndSetAllGoals(token);
				getAndSetAllSubGoals(token);

				getAndSetCurrentUser(token);
				getAndSetProfile(token);

				if (mountedRef.current) setMadeInitialRequests(true);
			}
		})();
	}, [
		getAccessTokenSilently,
		getAndSetProfile,
		getAndSetExercises,
		getAndSetContributorExercises,
		getAndSetWorkouts,
		getAndSetPrograms,
		getAndSetContributorRequests,
		getAndSetUsers,
		getAndSetCurrentUser,
		getAndSetAllGoals,
		getAndSetAllSubGoals,
		madeInitialRequests,
		user
	]);

	// Contributor specific requests
	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			console.log(token);

			if (!madeInitialRequests2) {
				if (currentUser && isContributor(user)) {
					getAndSetContributorExercises(currentUser?.id, token);
					getAndSetContributorWorkouts(currentUser?.id, token);
					getAndSetContributorPrograms(currentUser?.id, token);

					if (mountedRef2.current) setMadeInitialRequests2(true);
				}
			}
		})();
	}, [
		currentUser,
		user,
		getAccessTokenSilently,
		getAndSetContributorExercises,
		madeInitialRequests2,
		getAndSetContributorWorkouts,
		getAndSetContributorPrograms
	]);

	// Admin specific requests
	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			if (!madeInitialRequests3) {
				if (user && isAdministrator(user)) {
					getAndSetContributorRequests(token);
					getAndSetUsers(token);

					if (mountedRef3.current) setMadeInitialRequests3(true);
				}
			}
		})();
	}, [
		getAccessTokenSilently,
		getAndSetContributorRequests,
		getAndSetUsers,
		getAndSetCurrentUser,
		madeInitialRequests3,
		user
	]);

	// Preventing async requests running on unmounted component
	useEffect(() => {
		return () => {
			mountedRef.current = false;
		};
	}, []);

	useEffect(() => {
		return () => {
			mountedRef2.current = false;
		};
	}, []);

	useEffect(() => {
		return () => {
			mountedRef3.current = false;
		};
	}, []);

	const [currentGoal, setCurrentGoal] = useState();
	const [currentGoalProgram, setCurrentGoalProgram] = useState();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			const goalId = currentUser?.goals[0];
			const apiGoal = await getGoalById(goalId, token);

			const goalProgram = getProgramById(programs, apiGoal.workoutProgramId);

			setCurrentGoal(apiGoal);
			setCurrentGoalProgram(goalProgram);
		})();
	}, [getAccessTokenSilently, currentUser?.goals, programs]);

	return (
		<Container maxWidth='xl' className='pt-12 pb-24 text-center overflow-hidden'>
			<Typography component='h1' variant='h3' color='text.secondary' align='left'>
				Welcome back,{' '}
				<Box component='span' color={color} className='font-semibold '>
					{user?.nickname}
				</Box>
			</Typography>
			{currentUser?.goals.length !== 0 ? (
				<DashboardCurrentGoal currentGoal={currentGoal} goalProgram={currentGoalProgram} />
			) : (
				<DashboardSetGoal />
			)}
		</Container>
	);
};

export default DashboardPage;
