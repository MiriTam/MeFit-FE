import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllExercises } from '../../api/exercices';
import { useExercises } from '../../context/ExercisesContext';
import EditExercise from './EditExercise';

const EditExerciseList = ({ expanded, handleChange }) => {
	const { exercises, setExercises } = useExercises();
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			if (exercises.length !== 0) return;

			const token = await getAccessTokenSilently();
			const apiExercises = await getAllExercises(token);

			setExercises(apiExercises);
		})();
	}, [getAccessTokenSilently, setExercises, exercises]);

	return (
		<Box className='my-2'>
			{exercises.map((exercise, idx) => (
				<EditExercise
					key={exercise.id}
					name={exercise.name}
					description={exercise.description}
					panel={exercise.name}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditExerciseList;
