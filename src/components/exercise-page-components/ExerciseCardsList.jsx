import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import { getAllExercises, getExerciseById } from '../../api/exercices';
import ExerciseCard from './ExerciseCard';

const ExerciseCardsList = () => {
	const [exercises, setExercises] = useState([]);
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			const excercises = await getAllExercises(token);
			// const excercise = await getExerciseById(2, token);

			setExercises(excercises);
			// setExercises([excercise]);
		})();
	}, [getAccessTokenSilently]);

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
