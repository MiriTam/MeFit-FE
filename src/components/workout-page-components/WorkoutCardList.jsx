import { Box, Typography } from '@mui/material';

import { useWorkouts } from '../../context/WorkoutsContext';
import getUniqueWorkoutTypes from '../../utils/getUniqueWorkoutTypes';
import WorkoutCard from './WorkoutCard';

const WorkoutCardList = () => {
	const { workouts } = useWorkouts();

	return (
		<Box className='mt-4'>
			{/* Get unique workout categories, iterate over them */}
			{getUniqueWorkoutTypes(workouts).map((workoutType, idx) => (
				<Box className='mt-6' key={idx}>
					<Typography component='h2' variant='h6' color='text.secondary'>
						Workout type:{' '}
						<Box component={'span'} className='font-semibold' color='text.primary'>
							{workoutType}
						</Box>
					</Typography>
					{/* Display workouts for that workout category */}
					<Box className='mt-4 flex flex-wrap items-start gap-6 '>
						{workouts.map(
							workout =>
								workout.category === workoutType && (
									<WorkoutCard
										key={workout.id}
										id={workout.id}
										contributorId={workout.contributorId}
										name={workout.name}
										type={workout.category}
										difficulty={workout.difficulty}
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
