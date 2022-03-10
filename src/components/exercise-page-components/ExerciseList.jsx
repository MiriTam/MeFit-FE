import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { excercises } from '../../api/excercices';
import Exercise from './Exercise';

const ExerciseList = () => {
	const [exercise, setExercise] = useState([]);

	useEffect(() => {
		setTimeout(() => setExercise(excercises), 1000);
	}, []);

	return (
		<Box className='mt-4'>
			{exercise.map(exercises => (
				<Exercise
					key={exercises.id}
					name={exercises.name}
					description={exercises.description}
                    targetMuscleGroup={exercises.targetMuscleGroup}
                    image={exercises.image}
                    video={exercises.video}
				/>
			))}
		</Box>
	);
};

export default ExerciseList;
