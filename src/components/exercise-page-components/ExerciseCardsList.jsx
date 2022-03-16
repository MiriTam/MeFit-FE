import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import { getExercises } from '../../api/exercices';
import ExerciseCard from './ExerciseCard';

const ExerciseCardsList = () => {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		(async () => {
			const excercises = await getExercises();
			setExercises(excercises);
		})();
	}, []);

	return (
		<Box className='mt-6 flex flex-wrap gap-4 '>
			{exercises.map(exercise => (
				<ExerciseCard
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

export default ExerciseCardsList;
