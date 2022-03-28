import { Container } from '@mui/material';

import CurrentGoal from '../components/goal-page-components/CurrentGoal';
import SetGoal from '../components/goal-page-components/SetGoal';
import { useGoal } from '../context/GoalContext';

const GoalPage = () => {
	const { goal } = useGoal();

	return (
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			{goal ? <CurrentGoal /> : <SetGoal />}
		</Container>
	);
};

export default GoalPage;
