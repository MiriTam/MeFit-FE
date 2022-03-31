import { Box, Button, CardContent, List, Paper, Typography } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { useWorkouts } from '../../context/WorkoutsContext';
import getWorkoutById from '../../utils/getWorkoutById';
import WorkoutCard from '../workout-page-components/WorkoutCard';

export default function CurrentGoal({ currentGoal, goalProgram }) {
	const { workouts } = useWorkouts();

	return (
		<Box className='shadow-md rounded-md text-center'>
			<CardContent>
				<Typography sx={{ fontSize: 28 }} variant='h4'>
					My current goal
				</Typography>
				<Typography sx={{ mt: 2 }} variant='h5'>
					Program:
				</Typography>
				<Box className='flex justify-center' sx={{ mt: 2 }}>
					{!goalProgram ? (
						<Box>
							<ClipLoader color='#2374CE' size={30} />
						</Box>
					) : (
						<Paper elevation={4} className='w-64 px-6 py-4 text-center'>
							<CardContent>
								<Box>
									<Typography component='h3' variant='h5'>
										{goalProgram?.name}
									</Typography>
								</Box>
								<Box className='mt-2'>
									<Box>
										<Typography sx={{ fontSize: 16 }} color='text.secondary'>
											Category:{' '}
											<Typography
												variant='span'
												className='font-semibold'
												color='text.primary'>
												{goalProgram?.category}
											</Typography>
										</Typography>
										<Typography sx={{ fontSize: 16 }} color='text.secondary'>
											Difficulty:{' '}
											<Typography
												variant='span'
												className='font-semibold'
												color='text.primary'>
												{goalProgram?.difficulty}
											</Typography>
										</Typography>
									</Box>
								</Box>
							</CardContent>
						</Paper>
					)}
				</Box>
				<Typography sx={{ mt: 3 }} variant='h5'>
					Workouts:
				</Typography>
				<Box sx={{ mt: 2 }}>
					{!goalProgram ? (
						<ClipLoader color='#2374CE' size={30} />
					) : (
						<List sx={{ mt: 2 }} className=' flex flex-wrap gap-6 justify-center'>
							{goalProgram?.workouts.map(workoutId => {
								const workout = getWorkoutById(workouts, workoutId);
								return (
									<WorkoutCard
										key={workout.id}
										id={workout.id}
										contributorId={workout.contributorId}
										name={workout.name}
										type={workout.category}
										difficulty={workout.difficulty}
										sets={workout.sets}
									/>
								);
							})}
						</List>
					)}
				</Box>
				{goalProgram && (
					<Box sx={{ mt: 4, mb: 2 }}>
						<Button color='error' variant='contained'>
							Delete Goal
						</Button>
						<Button color='primary' variant='contained' sx={{ ml: 1 }}>
							Edit Goal
						</Button>
					</Box>
				)}
			</CardContent>
		</Box>
	);
}
