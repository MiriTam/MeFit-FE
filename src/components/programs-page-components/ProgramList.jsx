import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllPrograms } from '../../api/programs';
import Program from './Program';

const ProgramList = () => {
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		(async () => {
			const programs = await getAllPrograms();
			setPrograms(programs);
		})();
	}, []);

	return (
		<Box className='mt-4'>
			{programs.map(program => (
				<Program key={program.id} name={program.name} category={program.category} />
			))}
		</Box>
	);
};

export default ProgramList;
