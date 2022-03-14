import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import { getExercises } from '../../api/exercices';
import Exercise from './Exercise';

const ExerciseList = () => {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		(async () => {
			const excercises = await getExercises();
			setExercises(excercises);
		})();
	}, []);

	return (
		<Box className='mt-4'>
			{exercises.map(exercise => (
				<Exercise
					key={exercise.id}
					name={exercise.name}
					description={exercise.description}
					image={exercise.image}
					video={exercise.video}
				/>
			))}
		</Box>
	);
};

export default ExerciseList;
