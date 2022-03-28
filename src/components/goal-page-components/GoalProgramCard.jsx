import { Box, CardContent, List, ListItem, Paper, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useWorkouts } from '../../context/WorkoutsContext';
import getWorkoutNameById from '../../utils/getWorkoutNameById';

const color = lightBlue[500];

const GoalProgramCard = ({ id, name, category, workouts: _workouts, difficulty }) => {
	const { workouts } = useWorkouts();
	const [pickedProgram, setPickedProgram] = useState(null);

	function handleProgramPick(id) {
		if (pickedProgram === id) return setPickedProgram(null);
		setPickedProgram(id);
	}

	return (
		<Paper
			onClick={handleProgramPick(id)}
			elevation={4}
			className='w-64 px-6 py-4 text-center'
			sx={{
				border: pickedProgram === name ? '2px solid' : 'none',
				borderColor: pickedProgram === name && color
			}}>
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
						{_workouts.length === 0 && (
							<Typography
								variant='span'
								sx={{ fontSize: 16 }}
								color='text.secondary'
								className='font-semibold'>
								No workouts
							</Typography>
						)}

						{/* Program has workouts to show */}
						<Box className='mt-2'>
							<List className='divide-y max-h-56 overflow-y-scroll scrollbar '>
								{_workouts.map((workoutId, idx) => (
									<ListItem key={idx}>
										<Box className='text-center mx-auto'>
											<Typography sx={{ fontSize: 18 }}>Workout {idx + 1}</Typography>
											<Typography sx={{ fontSize: 16 }} color='text.secondary'>
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
						</Box>
					</Box>
				</Box>
			</CardContent>
		</Paper>
	);
};

export default GoalProgramCard;
