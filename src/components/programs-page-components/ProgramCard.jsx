import { Box, CardContent, List, ListItem, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import getWorkoutNameById from '../../utils/getWorkoutNameById';

const ProgramCard = ({ name, category, workouts, difficulty }) => {
	return (
		<Paper elevation={4} className='w-64 px-6 py-4 text-center'>
			<CardContent>
				<Box>
					<Typography component='h3' variant='h5'>
						{name}
					</Typography>
				</Box>
				<Box className='mt-2'>
					<Box>
						<Typography sx={{ fontSize: 16 }} color='text.secondary'>
							Category:{' '}
							<Typography variant='span' className='font-semibold' color='text.primary'>
								{category}
							</Typography>
						</Typography>
						<Typography sx={{ fontSize: 16 }} color='text.secondary'>
							Difficulty:{' '}
							<Typography variant='span' className='font-semibold' color='text.primary'>
								{difficulty}
							</Typography>
						</Typography>
					</Box>

					<Box className='mt-2'>
						{/* Program has no workouts to show*/}
						{workouts.length === 0 && (
							<Typography
								variant='span'
								sx={{ fontSize: 16 }}
								color='text.secondary'
								className='font-semibold'>
								No workouts
							</Typography>
						)}

						{/* Program has workouts to show */}
						{workouts.length !== 0 && (
							<List className='divide-y   max-h-56  overflow-y-scroll scrollbar '>
								{workouts.map(({ workoutId }, idx) => (
									<ListItem key={idx}>
										<Box className='text-center mx-auto'>
											<Typography sx={{ fontSize: 18 }}>Workout {idx + 1}</Typography>
											<Typography sx={{ fontSize: 16 }} color='text.secondary'>
												Workout:{' '}
												<Link
													className='text-blue-400 font-semibold '
													to={`/workouts?workoutId=${workoutId}`}>
													{getWorkoutNameById(workouts, workoutId)}
												</Link>
											</Typography>
										</Box>
									</ListItem>
								))}
							</List>
						)}
					</Box>
				</Box>
			</CardContent>
		</Paper>
	);
};

export default ProgramCard;
