import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllWorkouts } from '../../api/workouts';
import Workout from './Workout';

const WorkoutList = () => {
	const [workouts, setWorkouts] = useState([]);
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			const workouts = await getAllWorkouts(token);

			setWorkouts(workouts);
		})();
	}, [getAccessTokenSilently]);

	return (
		<Box className='mt-4'>
			{workouts.map(workout => (
				<Workout key={workout.id} name={workout.name} type={workout.type} sets={workout.sets} />
			))}
		</Box>
	);
};

export default WorkoutList;
