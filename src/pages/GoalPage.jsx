import { useAuth0 } from '@auth0/auth0-react';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { getGoalById } from '../api/goals';
import CurrentGoal from '../components/goal-page-components/CurrentGoal';
import SetGoal from '../components/goal-page-components/SetGoal';
import { useCurrentUser } from '../context/CurrentUserContext';
import { usePrograms } from '../context/ProgramsContext';
import getProgramById from '../utils/getProgramById';

const GoalPage = () => {
	const { currentUser } = useCurrentUser();
	const { programs } = usePrograms();
	const [currentGoal, setCurrentGoal] = useState();
	const [currentGoalProgram, setCurrentGoalProgram] = useState();
	const { getAccessTokenSilently } = useAuth0();

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
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			{currentUser?.goals.length !== 0 ? (
				<CurrentGoal currentGoal={currentGoal} goalProgram={currentGoalProgram} />
			) : (
				<SetGoal />
			)}
		</Container>
	);
};

export default GoalPage;
