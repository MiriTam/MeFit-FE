import { Box } from '@mui/material';

import { useWorkouts } from '../../context/WorkoutsContext';
import EditWorkout from './EditWorkout';

const EditWorkoutList = ({ expanded, handleChange }) => {
	const { workouts } = useWorkouts();

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
