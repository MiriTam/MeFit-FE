import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import { excercises as _excercises } from '../../api/excercices';
import Exercise from './Exercise';

const ExerciseList = () => {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		const timeoutFunc = setTimeout(() => setExercises(_excercises), 1000);

		return () => {
			clearTimeout(timeoutFunc);
		};
	}, []);

	return (
		<Box className='mt-4'>
			{exercises.map(exercise => (
				<Exercise
					key={exercise.id}
					name={exercise.name}
					description={exercise.description}
					targetMuscleGroup={exercise.targetMuscleGroup}
					image={exercise.image}
					video={exercise.video}
				/>
			))}
		</Box>
	);
};

export default ExerciseList;
