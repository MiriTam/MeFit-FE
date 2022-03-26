import { useAuth0 } from '@auth0/auth0-react';
import { List, Typography } from '@mui/material';
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
			if (exercises.length !== 0) return;

			console.log('Getting exercises from API...');
			const token = await getAccessTokenSilently();
			const apiExercises = await getAllExercises(token);

			setExercises(apiExercises);
		})();
	}, [getAccessTokenSilently, exercises, setExercises]);

	return (
		<Box className='mt-4'>
			{/* Get unique target muscle groups, iterate over them */}
			{getUniqueMuscleGroups(exercises).map((muscleGroup, idx) => (
				<Box key={idx} className='mt-6'>
					<Typography component='h2' variant='h6' color='text.secondary'>
						Target muscle:{' '}
						<Box component={'span'} className='font-semibold' color='text.primary'>
							{muscleGroup}
						</Box>
					</Typography>
					{/* Display exercises for that target muscle group */}
					<List className='mt-4 flex flex-wrap gap-4 items-start'>
						{exercises.map(
							exercise =>
								exercise.category === muscleGroup && (
									<ExerciseCard
										key={exercise.id}
										id={exercise.id}
										name={exercise.name}
										description={exercise.description}
										category={exercise.category}
										image={exercise.image}
										video={exercise.video}
									/>
								)
						)}
					</List>
				</Box>
			))}
		</Box>
	);
};

export default ExerciseCardList;
