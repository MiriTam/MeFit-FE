import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllPrograms } from '../../api/programs';
import { usePrograms } from '../../context/ProgramsContext';
import EditProgram from './EditProgram';

const EditWorkoutList = ({ expanded, handleChange }) => {
	const { programs, setPrograms } = usePrograms();
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			if (programs.length !== 0) return;

			const token = await getAccessTokenSilently();
			const apiPrograms = await getAllPrograms(token);

			setPrograms(apiPrograms);
		})();
	}, [getAccessTokenSilently, setPrograms, programs]);

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
