import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllPrograms } from '../../api/programs';
import EditProgram from './EditProgram';

const EditWorkoutList = () => {
	const [programs, setPrograms] = useState([]);
	const [expanded, setExpanded] = useState(false);

	const { getAccessTokenSilently } = useAuth0();

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			const apiPrograms = await getAllPrograms(token);

			setPrograms(apiPrograms);
		})();
	}, [getAccessTokenSilently]);

	return (
		<Box className='my-2'>
			{programs.map((program, idx) => (
				<EditProgram
					key={program.id}
					name={program.name}
					category={program.category}
					panel={`panel-${idx + 1}`}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditWorkoutList;
