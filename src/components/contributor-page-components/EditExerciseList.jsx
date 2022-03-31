import { Box } from '@mui/material';
import { useExercises } from '../../context/ExercisesContext';
import EditExercise from './EditExercise';

const EditExerciseList = ({ expanded, handleChange }) => {
	const { exercises } = useExercises();

	return (
		<Box className='my-2'>
			{exercises.map((exercise, idx) => (
				<EditExercise
					key={exercise.id}
					name={exercise.name}
					description={exercise.description}
					image={exercise.image}
					video={exercise.video}
					category={exercise.category}
					panel={exercise.name}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditExerciseList;
