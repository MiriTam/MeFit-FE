import { Box } from '@mui/material';

import { usePrograms } from '../../context/ProgramsContext';
import EditProgram from './EditProgram';

const EditWorkoutList = ({ expanded, handleChange }) => {
	const { programs } = usePrograms();

	return (
		<Box className='my-2'>
			{programs.map((program, idx) => (
				<EditProgram
					key={program.id}
					name={program.name}
					category={program.category}
					difficulty={program.difficulty}
					panel={program.name}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditWorkoutList;
