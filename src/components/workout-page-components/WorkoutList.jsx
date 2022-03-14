import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { workouts as workoutsArr } from '../../api/workouts';
import Workout from './Workout';

const WorkoutList = () => {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		const timeoutFunc = setTimeout(() => setWorkouts(workoutsArr), 1000);

		// Cleanup in case component unmounts
		return () => {
			clearTimeout(timeoutFunc);
		};
	}, []);

	return (
		<Box className='mt-4'>
			{workouts.map(program => (
				<Workout
					key={program.id}
					name={program.name}
					description={program.description}
					excercises={program.excercises}
				/>
			))}
		</Box>
	);
};

export default WorkoutList;
