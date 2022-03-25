import { Box, CardContent, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useExercises } from '../../context/ExercisesContext';
import getExerciseNameById from '../../utils/getExerciseNameById';

const WorkoutCard = ({ name, type, difficulty, sets, contributorId }) => {
	const { exercises } = useExercises();

	return (
		<Paper elevation={4} className='w-80 px-6 py-4 text-left'>
			<CardContent>
				<Box>
					<Typography component='h3' variant='h5'>
						{name}
					</Typography>
				</Box>
				<Box className='mt-2'>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Difficulty: {difficulty}
					</Typography>

					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Type: {type}
					</Typography>

					<Box className='mt-4'>
						<Typography component='h4' variant='h6' sx={{ fontSize: 20 }}>
							Sets
						</Typography>
						{sets.map(({ exerciseId, exerciseRepetitions }, idx) => (
							<Box className='mt-2'>
								<Typography sx={{ fontSize: 18 }}>Exercise {idx + 1}</Typography>
								<Typography sx={{ fontSize: 16 }} color='text.secondary'>
									Exercise:{' '}
									<Link
										className='text-blue-400 font-bold '
										to={`/exercises?exerciseId=${exerciseId}`}>
										{getExerciseNameById(exercises, exerciseId)}
									</Link>
								</Typography>
								<Typography sx={{ fontSize: 16 }} color='text.secondary'>
									Repetitions: {exerciseRepetitions}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</CardContent>
		</Paper>
	);
};

export default WorkoutCard;
