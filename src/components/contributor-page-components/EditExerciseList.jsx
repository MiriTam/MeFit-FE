import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllExercises } from '../../api/exercices';
import EditExercise from './EditExercise';

const EditExerciseList = () => {
	const [exercises, setExercises] = useState([]);
	const [expanded, setExpanded] = useState(false);

	const { getAccessTokenSilently } = useAuth0();

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			const apiExercises = await getAllExercises(token);

			setExercises(apiExercises);
		})();
	}, [getAccessTokenSilently]);

	return (
		<Box className='my-2'>
			{exercises.map((exercise, idx) => (
				<EditExercise
					key={exercise.id}
					name={exercise.name}
					description={exercise.description}
					panel={`panel-${idx + 1}`}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditExerciseList;
