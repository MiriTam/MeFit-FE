import { Box, Card, CardContent, List, ListItem, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useExercises } from '../../context/ExercisesContext';
import getExerciseNameById from '../../utils/getExerciseNameById';

const color = lightBlue[500];

const WorkoutCard = ({ id, name, type, difficulty, sets, contributorId }) => {
	const { exercises } = useExercises();
	const location = useLocation();

	function isHighlighted(id) {
		return location.search.includes(id);
	}

	return (
		<Card
			elevation={4}
			sx={{
				border: isHighlighted(id) ? '2px solid' : 'none',
				borderColor: isHighlighted(id) && color
			}}
			className='w-72 px-6 py-4 text-center'>
			<CardContent>
				<Box>
					<Typography component='h3' variant='h5'>
						{name}
					</Typography>
				</Box>

				<Box className='mt-2'>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Difficulty:{' '}
						<Typography variant='span' className='font-semibold' color='text.primary'>
							{difficulty}
						</Typography>
					</Typography>

					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Type:{' '}
						<Typography variant='span' className='font-semibold' color='text.primary'>
							{type}
						</Typography>
					</Typography>
				</Box>

				<Box className='mt-2'>
					<List className='divide-y max-h-56 overflow-y-scroll scrollbar '>
						{sets.map(({ exerciseId, exerciseRepetitions }, idx) => (
							<ListItem key={idx}>
								<Box className='text-center mx-auto'>
									<Typography sx={{ fontSize: 18 }}>Exercise {idx + 1}</Typography>
									<Typography sx={{ fontSize: 16 }} color='text.secondary'>
										Exercise:{' '}
										<Link
											className='text-blue-400 font-semibold '
											to={`/exercises?exerciseId=${exerciseId}`}>
											{getExerciseNameById(exercises, exerciseId)}
										</Link>
									</Typography>
									<Typography sx={{ fontSize: 16 }} color='text.secondary'>
										Repetitions:{' '}
										<Typography
											variant='span'
											className='font-semibold'
											color='text.primary'>
											{exerciseRepetitions}
										</Typography>
									</Typography>
								</Box>
							</ListItem>
						))}
					</List>
				</Box>
			</CardContent>
		</Card>
	);
};

export default WorkoutCard;
