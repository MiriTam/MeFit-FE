import { Box, CardContent, LinearProgress, List, Paper, Typography } from '@mui/material';
import { ClipLoader } from 'react-spinners';
import { useWorkouts } from '../../context/WorkoutsContext';
import getWorkoutById from '../../utils/getWorkoutById';
import WorkoutCard from '../workout-page-components/WorkoutCard';

export default function DashboardCurrentGoal({ currentGoal, goalProgram }) {
	const { workouts } = useWorkouts();

	return (
		<Box className='shadow-md  rounded-md p-6 '>
			<CardContent>
				<Typography sx={{ fontSize: 28 }} variant='h4'>
					My current goal
				</Typography>
				<Box sx={{ mt: 2 }}>
					{!goalProgram ? (
						<Box>
							<ClipLoader color='#2374CE' size={30} />
						</Box>
					) : (
						<Box className='lg:w-5/6 mx-auto'>
							<LinearProgress variant='determinate' value={60} />
						</Box>
					)}
				</Box>
				<Typography sx={{ mt: 3 }} variant='h5'>
					Days left:
				</Typography>
				<Box sx={{ mt: 1 }}>
					{!goalProgram ? (
						<Box>
							<ClipLoader color='#2374CE' size={30} />
						</Box>
					) : (
						<Typography sx={{ fontSize: 20 }} color='text.secondary'>
							7 days left
						</Typography>
					)}
				</Box>
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
			</CardContent>
		</Box>
	);
}
