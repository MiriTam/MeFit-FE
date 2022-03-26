import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllWorkouts } from '../../api/workouts';
import { useWorkouts } from '../../context/WorkoutsContext';
import EditWorkout from './EditWorkout';

const EditWorkoutList = ({ expanded, handleChange }) => {
	const { workouts, setWorkouts } = useWorkouts();
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			if (workouts.length !== 0) return;

			const token = await getAccessTokenSilently();
			const apiWorkouts = await getAllWorkouts(token);

			setWorkouts(apiWorkouts);
		})();
	}, [getAccessTokenSilently, setWorkouts, workouts]);

	return (
		<Box className='my-2'>
			{workouts.map((workout, idx) => (
				<EditWorkout
					key={workout.id}
					id={workout.id}
					name={workout.name}
					category={workout.category}
					difficulty={workout.difficulty}
					panel={workout.name}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditWorkoutList;
