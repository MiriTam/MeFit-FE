import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { getAllWorkouts } from '../../api/workouts';
import { useWorkouts } from '../../context/WorkoutsContext';
import getUniqueWorkoutTypes from '../../utils/getUniqueWorkoutTypes';
import WorkoutCard from './WorkoutCard';

const WorkoutCardList = () => {
	const { workouts, setWorkouts } = useWorkouts();
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			const apiWorkouts = await getAllWorkouts(token);

			setWorkouts(apiWorkouts);
		})();
	}, [getAccessTokenSilently, setWorkouts]);

	return (
		<Box className='mt-4'>
			{/* Get unique workout types, iterate over them */}
			{getUniqueWorkoutTypes(workouts).map(workoutType => (
				<Box className='mt-6'>
					<Typography component='h2' variant='h6' color='text.secondary'>
						Workout type:{' '}
						<Box component={'span'} className='font-semibold' color='text.primary'>
							{workoutType}
						</Box>
					</Typography>
					{/* Display workouts for that workout type */}
					<Box className='mt-4 flex flex-wrap gap-4 '>
						{workouts.map(
							workout =>
								workout.type === workoutType && (
									<WorkoutCard
										contributorId={workout.contributorId}
										name={workout.name}
										type={workout.type}
										sets={workout.sets}
									/>
								)
						)}
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default WorkoutCardList;
