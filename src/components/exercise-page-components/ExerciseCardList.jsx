import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';

import { getAllExercises } from '../../api/exercices';
import { useExercises } from '../../context/ExercisesContext';
import getUniqueMuscleGroups from '../../utils/getUniqueMuscleGroups';
import ExerciseCard from './ExerciseCard';

const ExerciseCardList = () => {
	const { exercises, setExercises } = useExercises();

	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			const apiExercises = await getAllExercises(token);

			setExercises(apiExercises);
		})();
	}, [getAccessTokenSilently, exercises, setExercises]);

	return (
		<Box className='mt-4'>
			{/* Get unique target muscle groups, iterate over them */}
			{getUniqueMuscleGroups(exercises).map(muscleGroup => (
				<Box className='mt-6'>
					<Typography component='h2' variant='h6' color='text.secondary'>
						Target muscle:{' '}
						<Box component={'span'} className='font-semibold' color='text.primary'>
							{muscleGroup}
						</Box>
					</Typography>
					{/* Display exercises for that target muscle group */}
					<Box className='mt-4 flex flex-wrap gap-4 '>
						{exercises.map(
							exercise =>
								exercise.targetMuscleGroup === muscleGroup && (
									<ExerciseCard
										name={exercise.name}
										description={exercise.description}
										video={exercise.video}
										image={exercise.image}
									/>
								)
						)}
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default ExerciseCardList;
