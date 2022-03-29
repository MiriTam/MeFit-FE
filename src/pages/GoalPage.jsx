import { Container } from '@mui/material';

import CurrentGoal from '../components/goal-page-components/CurrentGoal';
import SetGoal from '../components/goal-page-components/SetGoal';
import { useCurrentUser } from '../context/CurrentUserContext';

const GoalPage = () => {
	const { currentUser } = useCurrentUser();

	return (
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			{currentUser?.goals.length === 0 ? <CurrentGoal /> : <SetGoal />}
		</Container>
	);
};

export default GoalPage;
